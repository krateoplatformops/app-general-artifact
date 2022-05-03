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

export const deploymentDelete = (payload) => {
  return {
    type: deploymentConstants.DEPLOYMENT_DELETE,
    payload
  }
}

export const deploymentDeleteSuccess = (payload) => {
  return {
    type: deploymentConstants.DEPLOYMENT_DELETE_SUCCESS,
    payload
  }
}

export const deploymentDeleteFailure = (payload) => {
  return {
    type: deploymentConstants.DEPLOYMENT_DELETE_FAILURE,
    payload
  }
}

export const deploymentSingleLoad = (payload) => {
  return {
    type: deploymentConstants.DEPLOYMENT_SINGLE_LOAD,
    payload
  }
}

export const deploymentSingleLoadSuccess = (payload) => {
  return {
    type: deploymentConstants.DEPLOYMENT_SINGLE_LOAD_SUCCESS,
    payload
  }
}

export const deploymentSingleLoadFailure = (payload) => {
  return {
    type: deploymentConstants.DEPLOYMENT_SINGLE_LOAD_FAILURE,
    payload
  }
}
