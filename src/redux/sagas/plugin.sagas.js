import { put } from 'redux-saga/effects'
import axios from '../../axios-conf'
import {
  pluginFetchSuccess,
  pluginFetchFailure,
  addNotification
} from '../actions'
import { uiConstants } from '../../constants'
import { uiHelper } from '../../helpers'

export function* pluginFetchSaga(action) {
  try {
    const result = yield axios({
      method: action.payload.method,
      url: action.payload.url,
      data: action.payload.data
    })
    yield put(
      pluginFetchSuccess({ value: result.data, key: action.payload.key })
    )
    if (action.payload.message) {
      yield put(
        addNotification(
          action.payload.message,
          uiConstants.notification.success
        )
      )
    }
  } catch (error) {
    yield put(pluginFetchFailure(error))
    yield put(
      addNotification(
        uiHelper.errorMessage(error),
        uiConstants.notification.error
      )
    )
  }
}
