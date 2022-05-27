import { put } from 'redux-saga/effects'
import axios from '../../axios-conf'
import uris from '../../uris'
import {
  secretLoadSuccess,
  secretLoadFailure,
  addNotification,
  secretCreateSuccess,
  secretCreateFailure,
  secretDeleteSuccess,
  secretDeleteFailure
} from '../actions'
import { uiConstants } from '../../constants'

export function* secretLoadSaga() {
  try {
    const result = yield axios.get(uris.secret)
    yield put(secretLoadSuccess(result.data))
  } catch (error) {
    yield put(secretLoadFailure(error))
    yield put(
      addNotification(
        error.response.data.message,
        uiConstants.notification.error
      )
    )
  }
}

export function* secretCreateSaga(action) {
  try {
    const doc = yield axios.post(uris.secret, action.payload)
    yield put(secretCreateSuccess(doc.data))
    yield put(
      addNotification(
        uiConstants.messages.secret_create_success,
        uiConstants.notification.success
      )
    )
  } catch (error) {
    yield put(secretCreateFailure(error))
    yield put(
      addNotification(
        error.response.data.message,
        uiConstants.notification.error
      )
    )
  }
}

export function* secretDeleteSaga(action) {
  try {
    yield axios.delete(`${uris.secret}/${action.payload}`)
    yield put(secretDeleteSuccess(action.payload))
    yield put(
      addNotification(
        uiConstants.messages.secret_delete_success,
        uiConstants.notification.success
      )
    )
  } catch (error) {
    yield put(secretDeleteFailure(error))
    yield put(
      addNotification(
        error.response.data.message,
        uiConstants.notification.error
      )
    )
  }
}
