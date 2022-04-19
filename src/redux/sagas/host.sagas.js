import { put } from 'redux-saga/effects'
import axios from '../../axios-conf'
import uris from '../../uris'
import {
  hostLoadSuccess,
  hostLoadFailure,
  addNotification,
  hostCreateSuccess,
  hostCreateFailure,
  hostDeleteSuccess,
  hostDeleteFailure
} from '../actions'
import { uiConstants } from '../../constants'

export function* hostLoadSaga() {
  try {
    const result = yield axios.get(uris.host)
    yield put(hostLoadSuccess(result.data))
  } catch (error) {
    yield put(hostLoadFailure(error))
    yield put(
      addNotification(
        error.response.data.message,
        uiConstants.notification.error
      )
    )
  }
}

export function* hostCreateSaga(action) {
  try {
    const doc = yield axios.post(uris.host, action.payload)
    yield put(hostCreateSuccess(doc.data))
    yield put(
      addNotification(
        uiConstants.messages.host_create_success,
        uiConstants.notification.success
      )
    )
  } catch (error) {
    yield put(hostCreateFailure(error))
    yield put(
      addNotification(
        error.response.data.message,
        uiConstants.notification.error
      )
    )
  }
}

export function* hostDeleteSaga(action) {
  try {
    yield axios.delete(`${uris.host}/${action.payload}`)
    yield put(hostDeleteSuccess(action.payload))
    yield put(
      addNotification(
        uiConstants.messages.host_delete_success,
        uiConstants.notification.success
      )
    )
  } catch (error) {
    yield put(hostDeleteFailure(error))
    yield put(
      addNotification(
        error.response.data.message,
        uiConstants.notification.error
      )
    )
  }
}
