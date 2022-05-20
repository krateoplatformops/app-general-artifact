import { put } from 'redux-saga/effects'
import axios from '../../axios-conf'
import uris from '../../uris'
import {
  componentLoadSuccess,
  componentLoadFailure,
  addNotification
} from '../actions'
import { uiConstants } from '../../constants'

export function* componentLoadSaga() {
  try {
    const result = yield axios.get(uris.component)
    yield put(componentLoadSuccess(result.data))
  } catch (error) {
    yield put(componentLoadFailure(error))
    yield put(
      addNotification(
        error.response.data.message,
        uiConstants.notification.error
      )
    )
  }
}
