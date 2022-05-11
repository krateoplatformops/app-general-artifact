import { eventChannel } from 'redux-saga'
import { put, take } from 'redux-saga/effects'
import socketIOClient from 'socket.io-client'
import uris from '../../uris'
import {
  addNotification,
  socketReceived,
  logFetch,
  deploymentSingleLoad
} from '../actions'
import { uiConstants } from '../../constants'

const socket = socketIOClient(uris.socket)

// socket.io.on('error', () => {
//   console.log('socket error')
// })

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
      }
      // console.log(event)
      yield put(socketReceived(event))
    }
  } catch (error) {
    yield put(
      addNotification(
        error.response.data.message,
        uiConstants.notification.error
      )
    )
  }
}

export function* socketUnsubscribeSaga(action) {
  try {
    socket.off(action.payload)
  } catch (error) {
    yield put(
      addNotification(
        error.response.data.message,
        uiConstants.notification.error
      )
    )
  }
}
