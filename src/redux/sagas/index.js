import { takeEvery } from 'redux-saga/effects'
import {
  configConstants,
  userConstants,
  authConstants,
  registerConstants,
  socketConstants,
  templateConstants,
  deploymentConstants,
  proxyConstants,
  endpointConstants,
  pluginConstants,
  logConstants
} from '../constants'

import { configLoadSaga } from './config.sagas'
import { userLoadProfileSaga } from './user.sagas'
import { logoutSaga } from './auth.sagas'
import { registerImportSaga } from './register.sagas'
import { socketSubscribeSaga, socketUnsubscribeSaga } from './socket.sagas'
import { templateLoadSaga, templateDeleteSaga } from './template.sagas'
import {
  deploymentLoadSaga,
  deploymentCreateSaga,
  deploymentDeleteSaga,
  deploymentSingleLoadSaga
} from './deployment.sagas'
import { proxyFetchSaga } from './proxy.sagas'
import {
  endpointCreateSaga,
  endpointDeleteSaga,
  endpointLoadSaga
} from './endpoint.sagas'
import { pluginFetchSaga } from './plugin.sagas'
import { logFetchSaga } from './log.sagas'

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
}

export function* watchTemplate() {
  yield takeEvery(templateConstants.TEMPLATE_LOAD, templateLoadSaga)
  yield takeEvery(templateConstants.TEMPLATE_DELETE, templateDeleteSaga)
}

export function* watchDeployment() {
  yield takeEvery(deploymentConstants.DEPLOYMENT_LOAD, deploymentLoadSaga)
  yield takeEvery(deploymentConstants.DEPLOYMENT_CREATE, deploymentCreateSaga)
  yield takeEvery(deploymentConstants.DEPLOYMENT_DELETE, deploymentDeleteSaga)
  yield takeEvery(
    deploymentConstants.DEPLOYMENT_SINGLE_LOAD,
    deploymentSingleLoadSaga
  )
}

export function* watchProxy() {
  yield takeEvery(proxyConstants.PROXY_FETCH, proxyFetchSaga)
}

export function* watchEndpoint() {
  yield takeEvery(endpointConstants.ENDPOINT_LOAD, endpointLoadSaga)
  yield takeEvery(endpointConstants.ENDPOINT_CREATE, endpointCreateSaga)
  yield takeEvery(endpointConstants.ENDPOINT_DELETE, endpointDeleteSaga)
}

export function* watchPlugin() {
  yield takeEvery(pluginConstants.PLUGIN_FETCH, pluginFetchSaga)
}

export function* watchLog() {
  yield takeEvery(logConstants.LOG_FETCH, logFetchSaga)
}
