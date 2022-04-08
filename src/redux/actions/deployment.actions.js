import { deploymentConstants } from '../constants'

export const deploymentLoad = (payload) => {
  return {
    type: deploymentConstants.DEPLOYMENT_LOAD,
    payload
  }
}

export const deploymentLoadSuccess = (payload) => {
  return {
    type: deploymentConstants.DEPLOYMENT_LOAD_SUCCESS,
    payload
  }
}

export const deploymentLoadFailure = (payload) => {
  return {
    type: deploymentConstants.DEPLOYMENT_LOAD_FAILURE,
    payload
  }
}

export const deploymentCreate = (payload) => {
  return {
    type: deploymentConstants.DEPLOYMENT_CREATE,
    payload
  }
}

export const deploymentCreateSuccess = (payload) => {
  return {
    type: deploymentConstants.DEPLOYMENT_CREATE_SUCCESS,
    payload
  }
}

export const deploymentCreateFailure = (payload) => {
  return {
    type: deploymentConstants.DEPLOYMENT_CREATE_FAILURE,
    payload
  }
}

export const deployReset = () => {
  return {
    type: deploymentConstants.DEPLOYMENT_RESET
  }
}
