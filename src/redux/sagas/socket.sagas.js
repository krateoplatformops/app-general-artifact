import { eventChannel } from 'redux-saga'
import { put, take } from 'redux-saga/effects'
import socketIOClient from 'socket.io-client'
import uris from '../../uris'
import { addNotification, socketReceived } from '../actions'
import { uiConstants } from '../../constants'

const socket = socketIOClient(uris.socket)

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
      yield put(socketReceived(event))
    }
  } catch (error) {
    // console.log(error)
    // yield put(registerImportFailure(error))
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

export function* socketPullSaga(action) {
  try {
    // const listener =
    socket.emit('pull', action.payload)
    // eventChannel((emit) => {
    //   socket.emit('pull', (data) => {
    //     emit(action.payload)
    //   })
    //   return () => socket.close()
    // })
    // while (true) {
    //   const event = yield take(listener)
    //   yield put(socketReceived(event))
    // }
  } catch (error) {
    // console.log(error)
    // yield put(registerImportFailure(error))
    yield put(
      addNotification(
        error.response.data.message,
        uiConstants.notification.error
      )
    )
  }
}