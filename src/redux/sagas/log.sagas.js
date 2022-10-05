import { put } from 'redux-saga/effects'
import axios from '../../axios-conf'
import { logFetchSuccess, logFetchFailure, addNotification } from '../actions'
import { uiConstants } from '../../constants'
import uris from '../../uris'
import { uiHelper } from '../../helpers'

export function* logFetchSaga(action) {
  try {
    const result = yield axios.get(`${uris.log}/${action.payload.key}`)

    yield put(logFetchSuccess({ value: result.data, key: action.payload.key }))
  } catch (error) {
    yield put(logFetchFailure(error))
    yield put(
      addNotification(
        uiHelper.errorMessage(error),
        uiConstants.notification.error
      )
    )
  }
}
