import { userConstants } from '../constants'

export const userLoadProfile = () => {
  return {
    type: userConstants.USER_LOAD_PROFILE
  }
}

export const userLoadProfileSuccess = (payload) => {
  return {
    type: userConstants.USER_LOAD_PROFILE_SUCCESS,
    payload
  }
}

export const userLoadProfileFailure = (payload) => {
  return {
    type: userConstants.USER_LOAD_PROFILE_FAILURE,
    payload
  }
}

export const userReset = () => {
  return {
    type: userConstants.USER_RESET
  }
}
