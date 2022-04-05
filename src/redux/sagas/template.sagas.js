import { put } from 'redux-saga/effects'
import axios from '../../axios-conf'
import uris from '../../uris'
import {
  templateLoadSuccess,
  templateLoadFailure,
  addNotification,
  templateDeleteSuccess,
  templateDeleteFailure
} from '../actions'
import { uiConstants } from '../../constants'

export function* templateLoadSaga() {
  try {
    const result = yield axios.get(uris.template)
    yield put(templateLoadSuccess(result.data))
  } catch (error) {
    yield put(templateLoadFailure(error))
    yield put(
      addNotification(
        error.response.data.message,
        uiConstants.notification.error
      )
    )
  }
}

export function* templateDeleteSaga(action) {
  try {
    yield axios.delete(`${uris.template}/${action.payload}`)
    yield put(templateDeleteSuccess(action.payload))
    yield put(
      addNotification(
        uiConstants.messages.template_delete_success,
        uiConstants.notification.success
      )
    )
  } catch (error) {
    yield put(templateDeleteFailure(error))
    yield put(
      addNotification(
        error.response.data.message,
        uiConstants.notification.error
      )
    )
  }
}
