import { put } from 'redux-saga/effects'
import axios from 'axios'
import uris from '../../uris'
import {
  catalogLoadSuccess,
  catalogLoadFailure,
  addNotification
} from '../actions'
import { uiConstants } from '../../constants'
import { uiHelper } from '../../helpers'

export function* catalogLoadSaga() {
  try {
    const result = yield axios.get(uris.catalog)
    yield put(catalogLoadSuccess(result.data.packages))
  } catch (error) {
    yield put(catalogLoadFailure(error))
    yield put(
      addNotification(
        uiHelper.errorMessage(error),
        uiConstants.notification.error
      )
    )
  }
}
