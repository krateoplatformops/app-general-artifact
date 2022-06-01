import { put } from 'redux-saga/effects'
import axios from '../../axios-conf'
import * as axiosBase from 'axios'
import uris from '../../uris'
import {
  pkgLoadSuccess,
  pkgLoadFailure,
  addNotification,
  pkgUpdateSuccess,
  pkgUpdateFailure,
  pkgLoadSilent
} from '../actions'
import { uiConstants } from '../../constants'
import yaml from 'js-yaml'

export function* pkgLoadSaga() {
  try {
    const result = yield axios.get(uris.package)
    yield put(pkgLoadSuccess(result.data))
  } catch (error) {
    yield put(pkgLoadFailure(error))
    yield put(
      addNotification(
        error.response.data.message,
        uiConstants.notification.error
      )
    )
  }
}

export function* pkgUpdateSaga(action) {
  try {
    // get file
    const file = yield axiosBase.get(action.payload.package)

    try {
      // substitute version
      const regex = /[:].*/g
      const y = yaml.load(file.data)
      y.spec.package = y.spec.package.replace(
        regex,
        `:${action.payload.version}`
      )

      // update package
      const result = yield axios.post(uris.package, y)
      yield put(pkgUpdateSuccess())
      yield put(
        addNotification(result.data.message, uiConstants.notification.success)
      )
      yield put(pkgLoadSilent())
    } catch (e) {
      yield put(pkgUpdateFailure(e))
      yield put(
        addNotification(
          uiConstants.messages.update_package_error,
          uiConstants.notification.error
        )
      )
    }
  } catch (error) {
    yield put(pkgUpdateFailure(error))
    yield put(
      addNotification(
        error.response.data.message,
        uiConstants.notification.error
      )
    )
  }
}
