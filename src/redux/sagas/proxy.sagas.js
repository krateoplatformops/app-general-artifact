import { put } from 'redux-saga/effects'
import axios from '../../axios-conf'
import { proxyLoadSuccess, proxyLoadFailure, addNotification } from '../actions'
import { uiConstants } from '../../constants'

export function* proxyLoadSaga(action) {
  try {
    const result = yield axios({
      method: action.payload.method,
      url: action.payload.url,
      data: action.payload.data
    })
    yield put(proxyLoadSuccess({ value: result.data, key: action.payload.key }))
  } catch (error) {
    yield put(proxyLoadFailure(error))
    yield put(
      addNotification(
        error.response.data.message,
        uiConstants.notification.error
      )
    )
  }
}
