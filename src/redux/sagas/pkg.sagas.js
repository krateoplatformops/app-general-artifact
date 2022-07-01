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
  pkgLoadSilent,
  pkgAddFailure,
  pkgAddSuccess,
  pkgDeleteSuccess,
  pkgDeleteFailure,
  redirect
} from '../actions'
import { uiConstants } from '../../constants'
import yaml from 'js-yaml'
import { uiHelper } from '../../helpers'

export function* pkgLoadSaga() {
  try {
    const result = yield axios.get(uris.package)
    yield put(pkgLoadSuccess(result.data))
  } catch (error) {
    yield put(pkgLoadFailure(error))
    yield put(
      addNotification(
        uiHelper.errorMessage(error),
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
        uiHelper.errorMessage(error),
        uiConstants.notification.error
      )
    )
  }
}

export function* pkgAddSaga(action) {
  try {
    let y = null
    if (action.payload.package) {
      const file = yield axiosBase.get(action.payload.package)
      // substitute version
      const regex = /[:].*/g
      y = yaml.load(file.data)
      y.spec.package = y.spec.package.replace(
        regex,
        `:${action.payload.version}`
      )
    } else {
      y = action.payload.yaml
    }

    const result = yield axios.post(uris.package, y)
    yield put(pkgAddSuccess())
    yield put(
      addNotification(result.data.message, uiConstants.notification.success)
    )
    yield put(pkgLoadSilent())
    yield put(redirect('/packages'))
  } catch (error) {
    yield put(pkgAddFailure(error))
    yield put(
      addNotification(
        uiHelper.errorMessage(error),
        uiConstants.notification.error
      )
    )
  }
}

export function* pkgDeleteSaga(action) {
  try {
    yield axios.delete(uris.package, {
      data: {
        name: action.payload.name,
        kind: action.payload.kind
      }
    })
    yield put(pkgDeleteSuccess())
    yield put(
      addNotification(
        uiConstants.messages.package_delete_success,
        uiConstants.notification.success
      )
    )
    yield put(pkgLoadSilent())
  } catch (error) {
    yield put(pkgDeleteFailure(error))
    yield put(
      addNotification(
        uiHelper.errorMessage(error),
        uiConstants.notification.error
      )
    )
  }
}
