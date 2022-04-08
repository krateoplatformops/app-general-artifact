import { takeEvery } from 'redux-saga/effects'
import {
  configConstants,
  userConstants,
  authConstants,
  registerConstants,
  socketConstants,
  templateConstants,
  deploymentConstants
} from '../constants'

import { configLoadSaga } from './config.sagas'
import { userLoadProfileSaga } from './user.sagas'
import { logoutSaga } from './auth.sagas'
import { registerImportSaga } from './register.sagas'
import {
  socketSubscribeSaga,
  socketPullSaga,
  socketUnsubscribeSaga
} from './socket.sagas'
import { templateLoadSaga, templateDeleteSaga } from './template.sagas'
import { deploymentLoadSaga, deploymentCreateSaga } from './deployment.sagas'

export function* watchConfig() {
  yield takeEvery(configConstants.CONFIG_LOAD, configLoadSaga)
}

export function* watchUser() {
  yield takeEvery(userConstants.USER_LOAD_PROFILE, userLoadProfileSaga)
}

export function* watchAuth() {
  yield takeEvery(authConstants.AUTH_LOGOUT, logoutSaga)
}

export function* watchRegister() {
  yield takeEvery(registerConstants.REGISTER_IMPORT, registerImportSaga)
}

export function* watchSocket() {
  yield takeEvery(socketConstants.SOCKET_SUBSCRIBE, socketSubscribeSaga)
  yield takeEvery(socketConstants.SOCKET_UNSUBSCRIBE, socketUnsubscribeSaga)
  yield takeEvery(socketConstants.SOCKET_PULL, socketPullSaga)
}

export function* watchTemplate() {
  yield takeEvery(templateConstants.TEMPLATE_LOAD, templateLoadSaga)
  yield takeEvery(templateConstants.TEMPLATE_DELETE, templateDeleteSaga)
}

export function* watchDeployment() {
  yield takeEvery(deploymentConstants.DEPLOYMENT_LOAD, deploymentLoadSaga)
  yield takeEvery(deploymentConstants.DEPLOYMENT_CREATE, deploymentCreateSaga)
}
