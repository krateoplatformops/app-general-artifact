import { combineReducers } from 'redux'

import notify from './notify.reducer'
import redirect from './redirect.reducer'
import history from './history.reducer'
import config from './config.reducer'
import user from './user.reducer'
import auth from './auth.reducer'

const rootReducer = combineReducers({
  notify,
  redirect,
  history,
  config,
  user,
  auth
})

export default rootReducer
