import { put } from 'redux-saga/effects'
import axios from '../../axios-conf'
import uris from '../../uris'
import { pkgLoadSuccess, pkgLoadFailure, addNotification } from '../actions'
import { uiConstants } from '../../constants'

export function* pkgLoadSaga() {
  try {
    const result = yield axios.get(uris.package)
    yield put(pkgLoadSuccess(result.data))
  } catch (error) {
    yield put(pkgLoadFailure(error))
    yield put(
      addNotification(
        error.response.data.message,
        uiConstants.notification.error
      )
    )
  }
}
