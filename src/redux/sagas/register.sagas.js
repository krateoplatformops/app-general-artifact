import { put } from 'redux-saga/effects'
import axios from '../../axios-conf'
import uris from '../../uris'
import {
  registerImportSuccess,
  registerImportFailure,
  addNotification,
  redirect,
  templateUpdate,
  deploymentCreateSuccess
} from '../actions'
import { uiConstants } from '../../constants'
import { uiHelper } from '../../helpers'

export function* registerImportSaga(action) {
  try {
    const doc = yield axios.post(uris.register, action.payload)
    yield put(registerImportSuccess())

    switch (doc.data.kind) {
      case 'deployment':
        yield put(deploymentCreateSuccess(doc.data))
        yield put(
          addNotification(
            uiConstants.messages.deployment_import_success,
            uiConstants.notification.success
          )
        )
        yield put(redirect(`/deployments/${doc.data.metadata.uid}`))
        break
      default:
        yield put(templateUpdate(doc.data))
        yield put(
          addNotification(
            uiConstants.messages.template_import_success,
            uiConstants.notification.success
          )
        )
        yield put(redirect('/templates'))
    }
  } catch (error) {
    yield put(registerImportFailure(error))
    yield put(
      addNotification(
        uiHelper.errorMessage(error),
        uiConstants.notification.error
      )
    )
  }
}
