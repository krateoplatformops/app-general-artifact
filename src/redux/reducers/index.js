import { combineReducers } from 'redux'

import notify from './notify.reducer'
import redirect from './redirect.reducer'
import config from './config.reducer'
import user from './user.reducer'
import auth from './auth.reducer'
import register from './register.reducer'
import socket from './socket.reducer'

const rootReducer = combineReducers({
  notify,
  redirect,
  config,
  user,
  auth,
  register,
  socket
})

export default rootReducer
