import { put } from 'redux-saga/effects'
import axios from '../../axios-conf'
import uris from '../../uris'
import {
  endpointLoadSuccess,
  endpointLoadFailure,
  addNotification,
  endpointCreateSuccess,
  endpointCreateFailure,
  endpointDeleteSuccess,
  endpointDeleteFailure
} from '../actions'
import { uiConstants } from '../../constants'
import { uiHelper } from '../../helpers'

export function* endpointLoadSaga() {
  try {
    const result = yield axios.get(`${uris.secret}/endpoint`)
    yield put(endpointLoadSuccess(result.data))
  } catch (error) {
    yield put(endpointLoadFailure(error))
    yield put(
      addNotification(
        uiHelper.errorMessage(error),
        uiConstants.notification.error
      )
    )
  }
}

export function* endpointCreateSaga(action) {
  try {
    const doc = yield axios.post(`${uris.secret}/endpoint`, action.payload)
    yield put(endpointCreateSuccess(doc.data))
    yield put(
      addNotification(
        uiConstants.messages.endpoint_create_success,
        uiConstants.notification.success
      )
    )
  } catch (error) {
    yield put(endpointCreateFailure(error))
    yield put(
      addNotification(
        uiHelper.errorMessage(error),
        uiConstants.notification.error
      )
    )
  }
}

export function* endpointDeleteSaga(action) {
  try {
    yield axios.delete(`${uris.secret}/endpoint/${action.payload}`)
    yield put(endpointDeleteSuccess(action.payload))
    yield put(
      addNotification(
        uiConstants.messages.endpoint_delete_success,
        uiConstants.notification.success
      )
    )
  } catch (error) {
    yield put(endpointDeleteFailure(error))
    yield put(
      addNotification(
        uiHelper.errorMessage(error),
        uiConstants.notification.error
      )
    )
  }
}
