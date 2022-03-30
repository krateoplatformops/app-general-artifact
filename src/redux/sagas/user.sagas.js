import { put } from 'redux-saga/effects'
import axios from '../../axios-conf'
import uris from '../../uris'
import {
  userLoadProfileSuccess,
  userLoadProfileFailure
  // addNotification
} from '../actions'
// import { uiConstants } from '../../constants'

export function* userLoadProfileSaga() {
  try {
    const result = yield axios.get(uris.user)
    yield put(userLoadProfileSuccess(result.data))
  } catch (error) {
    yield put(userLoadProfileFailure(error))
    // yield put(
    //   addNotification(
    //     error.response.data.message,
    //     uiConstants.notification.error
    //   )
    // )
  }
}
