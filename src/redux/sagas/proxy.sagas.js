import { put } from 'redux-saga/effects'
import axios from '../../axios-conf'
import uris from '../../uris'
import {
  proxyFetchSuccess,
  proxyFetchFailure,
  addNotification,
  proxyLoadSuccess,
  proxyLoadFailure,
  proxyCreateSuccess,
  proxyCreateFailure,
  proxyDeleteSuccess,
  proxyDeleteFailure
} from '../actions'
import { uiConstants } from '../../constants'

export function* proxyFetchSaga(action) {
  try {
    const result = yield axios({
      method: action.payload.method,
      url: action.payload.url,
      data: action.payload.data
    })
    yield put(
      proxyFetchSuccess({ value: result.data, key: action.payload.key })
    )
  } catch (error) {
    yield put(proxyFetchFailure(error))
    yield put(
      addNotification(
        error.response.data.message,
        uiConstants.notification.error
      )
    )
  }
}

export function* proxyLoadSaga() {
  try {
    const result = yield axios.get(uris.proxy)
    yield put(proxyLoadSuccess(result.data))
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

export function* proxyCreateSaga(action) {
  try {
    const doc = yield axios.post(uris.proxy, action.payload)
    yield put(proxyCreateSuccess(doc.data))
    yield put(
      addNotification(
        uiConstants.messages.proxy_create_success,
        uiConstants.notification.success
      )
    )
  } catch (error) {
    yield put(proxyCreateFailure(error))
    yield put(
      addNotification(
        error.response.data.message,
        uiConstants.notification.error
      )
    )
  }
}

export function* proxyDeleteSaga(action) {
  try {
    yield axios.delete(`${uris.proxy}/${action.payload}`)
    yield put(proxyDeleteSuccess(action.payload))
    yield put(
      addNotification(
        uiConstants.messages.proxy_delete_success,
        uiConstants.notification.success
      )
    )
  } catch (error) {
    yield put(proxyDeleteFailure(error))
    yield put(
      addNotification(
        error.response.data.message,
        uiConstants.notification.error
      )
    )
  }
}
