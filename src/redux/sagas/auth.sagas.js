import { put } from 'redux-saga/effects'
import axios from '../../axios-conf'
import uris from '../../uris'

import {
  logoutSuccess,
  logoutFailure,
  addNotification,
  redirect
} from '../actions'
import { uiConstants } from '../../constants'

export function* logoutSaga() {
  try {
    yield axios.get(uris.logout)
    yield put(logoutSuccess())
    yield put(redirect('/'))
  } catch (error) {
    yield put(logoutFailure(error))
    yield put(
      addNotification(
        error.response.data.message,
        uiConstants.notification.error
      )
    )
  }
}
