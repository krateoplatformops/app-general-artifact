import { authConstants } from '../constants'

export const login = (payload) => {
  return {
    type: authConstants.AUTH_LOGIN,
    payload
  }
}

export const loginSuccess = () => {
  return {
    type: authConstants.AUTH_LOGIN_SUCCESS
  }
}

export const loginFailure = (payload) => {
  return {
    type: authConstants.AUTH_LOGIN_FAILURE,
    payload
  }
}

export const logout = () => {
  return {
    type: authConstants.AUTH_LOGOUT
  }
}

export const logoutSuccess = () => {
  return {
    type: authConstants.AUTH_LOGOUT_SUCCESS
  }
}

export const logoutFailure = () => {
  return {
    type: authConstants.AUTH_LOGOUT_FAILURE
  }
}
