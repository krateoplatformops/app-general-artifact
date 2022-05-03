import { put } from 'redux-saga/effects'
import axios from '../../axios-conf'
import { logFetchSuccess, logFetchFailure, addNotification } from '../actions'
import { uiConstants } from '../../constants'
import uris from '../../uris'

export function* logFetchSaga(action) {
  try {
    let url = uris.log + '?'
    Object.keys(action.payload.params).forEach((key) => {
      if (url[url.length - 1] !== '?') {
        url += '&'
      }
      url += `${key}=${action.payload.params[key]}`
    })
    const result = yield axios.get(url)

    yield put(logFetchSuccess({ value: result.data, key: action.payload.key }))
  } catch (error) {
    yield put(logFetchFailure(error))
    yield put(
      addNotification(
        error.response.data.message,
        uiConstants.notification.error
      )
    )
  }
}
