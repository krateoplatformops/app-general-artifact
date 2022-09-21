import { put } from 'redux-saga/effects'
import axios from '../../axios-conf'
import uris from '../../uris'
import {
  deploymentCreateSuccess,
  deploymentCreateFailure,
  addNotification,
  deploymentLoadSuccess,
  deploymentLoadFailure,
  redirect,
  deploymentDeleteSuccess,
  deploymentDeleteFailure,
  deploymentSingleLoadSuccess,
  deploymentSingleLoadFailure
} from '../actions'
import { uiConstants } from '../../constants'
import { uiHelper } from '../../helpers'

export function* deploymentLoadSaga() {
  try {
    const result = yield axios.get(uris.deployment)
    yield put(deploymentLoadSuccess(result.data))
  } catch (error) {
    yield put(deploymentLoadFailure(error))
    yield put(
      addNotification(
        uiHelper.errorMessage(error),
        uiConstants.notification.error
      )
    )
  }
}

export function* deploymentSingleLoadSaga(action) {
  try {
    const result = yield axios.get(
      `${uris.deployment}/${action.payload.kind}/${action.payload.uid}`
    )
    yield put(deploymentSingleLoadSuccess(result.data))
  } catch (error) {
    yield put(deploymentSingleLoadFailure(error))
    yield put(
      addNotification(
        uiHelper.errorMessage(error),
        uiConstants.notification.error
      )
    )
  }
}

export function* deploymentCreateSaga(action) {
  try {
    const doc = yield axios.post(uris.deployment, action.payload)
    yield put(deploymentCreateSuccess(doc.data))
    yield put(
      addNotification(
        uiConstants.messages.deployment_create_success,
        uiConstants.notification.success
      )
    )
    yield put(redirect(`/deployments/${doc.data.metadata.uid}/events`))
  } catch (error) {
    yield put(deploymentCreateFailure(error))
    yield put(
      addNotification(
        uiHelper.errorMessage(error),
        uiConstants.notification.error
      )
    )
  }
}

export function* deploymentDeleteSaga(action) {
  try {
    yield axios.delete(uris.deployment, { data: action.payload })
    yield put(deploymentDeleteSuccess(action.payload.uid))
    yield put(
      addNotification(
        uiConstants.messages.deployment_delete_success,
        uiConstants.notification.success
      )
    )
    yield put(redirect('/deployments'))
  } catch (error) {
    yield put(deploymentDeleteFailure(error))
    yield put(
      addNotification(
        uiHelper.errorMessage(error),
        uiConstants.notification.error
      )
    )
  }
}
