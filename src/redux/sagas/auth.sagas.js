import { put } from 'redux-saga/effects'
import axios from '../../axios-conf'
import uris from '../../uris'

import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  addNotification,
  userReset,
  redirect,
  userLoadProfileSuccess
} from '../actions'
import { uiConstants } from '../../constants'

export function* loginSaga(action) {
  try {
    const { title, data, id } = action.payload
    const result = yield axios.post(`${uris.auth}/${title}?id=${id}`, data)
    yield put(loginSuccess())
    yield put(userLoadProfileSuccess(result.data))
  } catch (error) {
    yield put(loginFailure(error))
    yield put(
      addNotification(
        uiConstants.messages.login_failure,
        uiConstants.notification.error
      )
    )
  }
}

export function* logoutSaga() {
  try {
    yield axios.get(uris.logout)
    yield put(userReset())
    yield put(redirect('/'))
    yield put(logoutSuccess())
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
