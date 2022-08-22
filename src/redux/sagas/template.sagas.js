import { put } from 'redux-saga/effects'
import axios from '../../axios-conf'
import uris from '../../uris'
import {
  templateLoadSuccess,
  templateLoadFailure,
  addNotification,
  templateDeleteSuccess,
  templateDeleteFailure,
  templateCreateSuccess,
  redirect,
  templateCreateFailure
} from '../actions'
import { uiConstants } from '../../constants'
import { uiHelper } from '../../helpers'

export function* templateLoadSaga() {
  try {
    const result = yield axios.get(uris.template)
    yield put(templateLoadSuccess(result.data))
  } catch (error) {
    yield put(templateLoadFailure(error))
    yield put(
      addNotification(
        uiHelper.errorMessage(error),
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
        uiHelper.errorMessage(error),
        uiConstants.notification.error
      )
    )
  }
}

export function* templateCreateSaga(action) {
  try {
    const doc = yield axios.post(uris.template, action.payload)
    yield put(templateCreateSuccess(doc.data))
    yield put(
      addNotification(
        uiConstants.messages.template_import_success,
        uiConstants.notification.success
      )
    )
    yield put(redirect('/templates'))
  } catch (error) {
    yield put(templateCreateFailure(error))
    yield put(
      addNotification(
        uiHelper.errorMessage(error),
        uiConstants.notification.error
      )
    )
  }
}
