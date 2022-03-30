import { put } from 'redux-saga/effects'
import axios from '../../axios-conf'
import uris from '../../uris'
import {
  registerImportSuccess,
  registerImportFailure,
  addNotification
} from '../actions'
import { uiConstants } from '../../constants'

export function* registerImportSaga(action) {
  try {
    yield axios.post(uris.register, action.payload)
    yield put(registerImportSuccess())
    // TODO: redirect
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
