import { put } from 'redux-saga/effects'
import axios from '../../axios-conf'
import uris from '../../uris'
import {
  registerImportSuccess,
  registerImportFailure,
  addNotification,
  redirect,
  templateUpdate
} from '../actions'
import { uiConstants } from '../../constants'

export function* registerImportSaga(action) {
  try {
    const doc = yield axios.post(uris.register, action.payload)
    yield put(registerImportSuccess())
    yield put(templateUpdate(doc.data))
    yield put(
      addNotification(
        uiConstants.messages.template_import_success,
        uiConstants.notification.success
      )
    )
    yield put(redirect('/templates'))
  } catch (error) {
    yield put(registerImportFailure(error))
    yield put(
      addNotification(
        error.response.data.message,
        uiConstants.notification.error
      )
    )
  }
}
