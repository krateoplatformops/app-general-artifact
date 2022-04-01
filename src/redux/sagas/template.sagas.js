import { put } from 'redux-saga/effects'
import axios from '../../axios-conf'
import uris from '../../uris'
import {
  templateLoadSuccess,
  templateLoadFailure,
  addNotification
} from '../actions'
import { uiConstants } from '../../constants'

export function* templateLoadSaga(action) {
  try {
    const result = yield axios.get(uris.template)
    yield put(templateLoadSuccess(result.data))
  } catch (error) {
    yield put(templateLoadFailure(error))
    yield put(
      addNotification(
        error.response.data.message,
        uiConstants.notification.error
      )
    )
  }
}
