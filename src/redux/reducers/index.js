import { combineReducers } from 'redux'

import notify from './notify.reducer'
import redirect from './redirect.reducer'
import config from './config.reducer'
import user from './user.reducer'
import auth from './auth.reducer'
import register from './register.reducer'
import socket from './socket.reducer'
import template from './template.reducer'
import ui from './ui.reducer'
import deployment from './deployment.reducer'
import proxy from './proxy.reducer'
import host from './host.reducer'

const rootReducer = combineReducers({
  notify,
  redirect,
  config,
  user,
  auth,
  register,
  socket,
  template,
  ui,
  deployment,
  proxy,
  host
})

export default rootReducer
