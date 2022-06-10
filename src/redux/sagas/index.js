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
  logConstants,
  dashboardConstants,
  pkgConstants,
  componentConstants,
  secretConstants,
  catalogConstants
} from '../constants'

import { configLoadSaga } from './config.sagas'
import { userLoadProfileSaga } from './user.sagas'
import { loginSaga, logoutSaga } from './auth.sagas'
import { registerImportSaga } from './register.sagas'
import {
  socketInitSaga,
  socketSubscribeSaga,
  socketUnsubscribeSaga
} from './socket.sagas'
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
import { dashboardLoadSaga } from './dashboard.sagas'
import { pkgLoadSaga, pkgUpdateSaga, pkgAddSaga } from './pkg.sagas'
import { componentLoadSaga } from './component.sagas'
import {
  secretCreateSaga,
  secretDeleteSaga,
  secretLoadSaga
} from './secret.sagas'
import { catalogLoadSaga } from './catalog.sagas'

export function* watchConfig() {
  yield takeEvery(configConstants.CONFIG_LOAD, configLoadSaga)
}

export function* watchUser() {
  yield takeEvery(userConstants.USER_LOAD_PROFILE, userLoadProfileSaga)
}

export function* watchAuth() {
  yield takeEvery(authConstants.AUTH_LOGIN, loginSaga)
  yield takeEvery(authConstants.AUTH_LOGOUT, logoutSaga)
}

export function* watchRegister() {
  yield takeEvery(registerConstants.REGISTER_IMPORT, registerImportSaga)
}

export function* watchSocket() {
  yield takeEvery(socketConstants.SOCKET_INIT, socketInitSaga)
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

export function* watchDashboard() {
  yield takeEvery(dashboardConstants.DASHBOARD_LOAD, dashboardLoadSaga)
}

export function* watchPkg() {
  yield takeEvery(pkgConstants.PKG_LOAD, pkgLoadSaga)
  yield takeEvery(pkgConstants.PKG_LOAD_SILENT, pkgLoadSaga)
  yield takeEvery(pkgConstants.PKG_UPDATE, pkgUpdateSaga)
  yield takeEvery(pkgConstants.PKG_ADD, pkgAddSaga)
}

export function* watchComponent() {
  yield takeEvery(componentConstants.COMPONENT_LOAD, componentLoadSaga)
}

export function* watchSecret() {
  yield takeEvery(secretConstants.SECRET_LOAD, secretLoadSaga)
  yield takeEvery(secretConstants.SECRET_CREATE, secretCreateSaga)
  yield takeEvery(secretConstants.SECRET_DELETE, secretDeleteSaga)
}

export function* watchCatalog() {
  yield takeEvery(catalogConstants.CATALOG_LOAD, catalogLoadSaga)
}
