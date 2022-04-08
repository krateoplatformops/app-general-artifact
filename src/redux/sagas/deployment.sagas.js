import { put } from 'redux-saga/effects'
import axios from '../../axios-conf'
import uris from '../../uris'
import {
  deploymentCreateSuccess,
  deploymentCreateFailure,
  addNotification,
  deploymentLoadSuccess,
  deploymentLoadFailure,
  redirect
} from '../actions'
import { uiConstants } from '../../constants'

export function* deploymentLoadSaga() {
  try {
    const result = yield axios.get(uris.deployment)
    yield put(deploymentLoadSuccess(result.data))
  } catch (error) {
    yield put(deploymentLoadFailure(error))
    yield put(
      addNotification(
        error.response.data.message,
        uiConstants.notification.error
      )
    )
  }
}

export function* deploymentCreateSaga(action) {
  try {
    const doc = yield axios.post(uris.deployment, action.payload)
    yield put(deploymentCreateSuccess())
    yield put(
      addNotification(
        uiConstants.messages.deploy_create_success,
        uiConstants.notification.success
      )
    )
    yield put(redirect(`/deployment/${doc.data.id}/logs`))
  } catch (error) {
    yield put(deploymentCreateFailure(error))
    yield put(
      addNotification(
        error.response.data.message,
        uiConstants.notification.error
      )
    )
  }
}
