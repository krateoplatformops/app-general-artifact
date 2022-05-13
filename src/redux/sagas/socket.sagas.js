import { eventChannel } from 'redux-saga'
import { put, take } from 'redux-saga/effects'
import socketIOClient from 'socket.io-client'
import uris from '../../uris'
import {
  addNotification,
  socketInitError,
  logFetch,
  deploymentSingleLoad,
  socketEvent
} from '../actions'
import { uiConstants } from '../../constants'
import { securityHelper, timeHelper } from '../../helpers'

const socket = socketIOClient(uris.socket)

export function* socketInitSaga() {
  try {
    const listener = eventChannel((emit) => {
      socket.io.on('error', () => {
        emit({ type: 'error' })
      })
      return () => socket.close()
    })
    while (true) {
      const event = yield take(listener)
      if (event.type === 'error') {
        socket.disconnect()
        yield put(socketInitError())
      }
    }
  } catch (error) {
    yield put(
      addNotification(JSON.stringify(error), uiConstants.notification.error)
    )
  }
}

export function* socketSubscribeSaga(action) {
  try {
    const listener = eventChannel((emit) => {
      socket.on(action.payload, (data) => {
        emit(data)
      })
      return () => socket.close()
    })

    while (true) {
      const event = yield take(listener)

      if (event.deploymentId) {
        // refresh logs
        yield put(logFetch({ key: event.deploymentId, params: event }))
        // refresh deployment
        yield put(deploymentSingleLoad({ _id: event.deploymentId }))
      } else {
        // this is a general event
        yield put(
          socketEvent({
            ...event,
            read: false,
            id: securityHelper.guid(),
            time: timeHelper.currentTime()
          })
        )
      }
    }
  } catch (error) {
    yield put(
      addNotification(JSON.stringify(error), uiConstants.notification.error)
    )
  }
}

export function* socketUnsubscribeSaga(action) {
  try {
    socket.off(action.payload)
  } catch (error) {
    yield put(
      addNotification(JSON.stringify(error), uiConstants.notification.error)
    )
  }
}
