import { authConstants } from '../constants'

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
