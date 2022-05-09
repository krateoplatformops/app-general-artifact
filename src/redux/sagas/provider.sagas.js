import { put } from 'redux-saga/effects'
import axios from '../../axios-conf'
import uris from '../../uris'
import {
  providerLoadSuccess,
  providerLoadFailure,
  addNotification
} from '../actions'
import { uiConstants } from '../../constants'

export function* providerLoadSaga() {
  try {
    const result = yield axios.get(uris.provider)
    yield put(providerLoadSuccess(result.data))
  } catch (error) {
    yield put(providerLoadFailure(error))
    yield put(
      addNotification(
        error.response.data.message,
        uiConstants.notification.error
      )
    )
  }
}
