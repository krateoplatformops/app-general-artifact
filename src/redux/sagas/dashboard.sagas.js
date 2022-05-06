import { put } from 'redux-saga/effects'
import axios from '../../axios-conf'
import uris from '../../uris'
import {
  dashboardLoadSuccess,
  dashboardLoadFailure,
  addNotification
} from '../actions'
import { uiConstants } from '../../constants'

export function* dashboardLoadSaga() {
  try {
    const result = yield axios.get(uris.dashboard)
    yield put(dashboardLoadSuccess(result.data))
  } catch (error) {
    yield put(dashboardLoadFailure(error))
    yield put(
      addNotification(
        error.response.data.message,
        uiConstants.notification.error
      )
    )
  }
}
