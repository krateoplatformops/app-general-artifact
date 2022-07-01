import { put } from 'redux-saga/effects'
import axios from '../../axios-conf'
import uris from '../../uris'
import {
  dashboardLoadSuccess,
  dashboardLoadFailure,
  addNotification
} from '../actions'
import { uiConstants } from '../../constants'
import { uiHelper } from '../../helpers'

export function* dashboardLoadSaga() {
  try {
    const result = yield axios.get(uris.dashboard)
    yield put(dashboardLoadSuccess(result.data))
  } catch (error) {
    yield put(dashboardLoadFailure(error))
    yield put(
      addNotification(
        uiHelper.errorMessage(error),
        uiConstants.notification.error
      )
    )
  }
}
