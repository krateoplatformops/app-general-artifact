import { combineReducers } from 'redux'

import notify from './notify.reducer'
import redirect from './redirect.reducer'
import config from './config.reducer'
import user from './user.reducer'
import auth from './auth.reducer'
import register from './register.reducer'
import socket from './socket.reducer'
import template from './template.reducer'
import deployment from './deployment.reducer'
import proxy from './proxy.reducer'
import endpoint from './endpoint.reducer'
import plugin from './plugin.reducer'
import log from './log.reducer'
import dashboard from './dashboard.reducer'
import pkg from './pkg.reducer'
import component from './component.reducer'
import secret from './secret.reducer'

const rootReducer = combineReducers({
  notify,
  redirect,
  config,
  user,
  auth,
  register,
  socket,
  template,
  deployment,
  proxy,
  endpoint,
  plugin,
  log,
  dashboard,
  pkg,
  component,
  secret
})

export default rootReducer
