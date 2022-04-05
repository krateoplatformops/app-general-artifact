import { put } from 'redux-saga/effects'
import axios from '../../axios-conf'
import uris from '../../uris'
import {
  deployCreateSuccess,
  deployCreateFailure,
  addNotification,
  redirect
} from '../actions'
import { uiConstants } from '../../constants'

export function* deployCreateSaga(action) {
  try {
    const doc = yield axios.post(uris.deploy, action.payload)
    yield put(deployCreateSuccess())
    yield put(
      addNotification(
        uiConstants.messages.deploy_create_success,
        uiConstants.notification.success
      )
    )
    yield put(redirect(`/deploy/${action.payload.templateId}/${doc.data.id}`))
  } catch (error) {
    yield put(deployCreateFailure(error))
    yield put(
      addNotification(
        error.response.data.message,
        uiConstants.notification.error
      )
    )
  }
}
