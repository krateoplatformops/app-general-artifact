import { put } from 'redux-saga/effects'
import axios from '../../axios-conf'
import uris from '../../uris'
import {
  configLoadSuccess,
  configLoadFailure,
  addNotification
} from '../actions'
import { uiConstants } from '../../constants'

export function* configLoadSaga() {
  try {
    const result = yield axios.get(uris.config)
    yield put(configLoadSuccess(result.data))
  } catch (error) {
    yield put(configLoadFailure(error))
    yield put(
      addNotification(
        error.response.data.message,
        uiConstants.notification.error
      )
    )
  }
}
