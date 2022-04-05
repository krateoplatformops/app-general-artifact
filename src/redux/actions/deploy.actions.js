import { deployConstants } from '../constants'

export const deployCreate = (payload) => {
  return {
    type: deployConstants.DEPLOY_CREATE,
    payload
  }
}

export const deployCreateSuccess = (payload) => {
  return {
    type: deployConstants.DEPLOY_CREATE_SUCCESS,
    payload
  }
}

export const deployCreateFailure = (payload) => {
  return {
    type: deployConstants.DEPLOY_CREATE_FAILURE,
    payload
  }
}

export const deployReset = () => {
  return {
    type: deployConstants.DEPLOY_RESET
  }
}
