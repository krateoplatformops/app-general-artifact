import { put } from 'redux-saga/effects'
import axios from '../../axios-conf'
import uris from '../../uris'
import {
  strategyLoadSuccess,
  strategyLoadFailure,
  addNotification,
  strategyCreateSuccess,
  strategyCreateFailure,
  strategyDeleteSuccess,
  strategyDeleteFailure
} from '../actions'
import { uiConstants } from '../../constants'
import { uiHelper } from '../../helpers'

export function* strategyLoadSaga() {
  try {
    const result = yield axios.get(uris.strategy)
    yield put(strategyLoadSuccess(result.data))
  } catch (error) {
    yield put(strategyLoadFailure(error))
    yield put(
      addNotification(
        uiHelper.errorMessage(error),
        uiConstants.notification.error
      )
    )
  }
}

export function* strategyCreateSaga(action) {
  try {
    const doc = yield axios.post(uris.strategy, action.payload)
    yield put(strategyCreateSuccess(doc.data))
    yield put(
      addNotification(
        uiConstants.messages.strategy_create_success,
        uiConstants.notification.success
      )
    )
  } catch (error) {
    yield put(strategyCreateFailure(error))
    yield put(
      addNotification(
        uiHelper.errorMessage(error),
        uiConstants.notification.error
      )
    )
  }
}

export function* strategyDeleteSaga(action) {
  try {
    yield axios.delete(`${uris.strategy}/${action.payload.metadata.name}`)
    yield put(strategyDeleteSuccess(action.payload))
    yield put(
      addNotification(
        uiConstants.messages.strategy_delete_success,
        uiConstants.notification.success
      )
    )
  } catch (error) {
    yield put(strategyDeleteFailure(error))
    yield put(
      addNotification(
        uiHelper.errorMessage(error),
        uiConstants.notification.error
      )
    )
  }
}
