import { endpointConstants } from '../constants'

export const endpointLoad = (payload) => {
  return {
    type: endpointConstants.ENDPOINT_LOAD,
    payload
  }
}

export const endpointLoadSuccess = (payload) => {
  return {
    type: endpointConstants.ENDPOINT_LOAD_SUCCESS,
    payload
  }
}

export const endpointLoadFailure = (payload) => {
  return {
    type: endpointConstants.ENDPOINT_LOAD_FAILURE,
    payload
  }
}

export const endpointReset = () => {
  return {
    type: endpointConstants.ENDPOINT_RESET
  }
}

export const endpointCreate = (payload) => {
  return {
    type: endpointConstants.ENDPOINT_CREATE,
    payload
  }
}

export const endpointCreateSuccess = (payload) => {
  return {
    type: endpointConstants.ENDPOINT_CREATE_SUCCESS,
    payload
  }
}

export const endpointCreateFailure = (payload) => {
  return {
    type: endpointConstants.ENDPOINT_CREATE_FAILURE,
    payload
  }
}

export const endpointDelete = (payload) => {
  return {
    type: endpointConstants.ENDPOINT_DELETE,
    payload
  }
}

export const endpointDeleteSuccess = (payload) => {
  return {
    type: endpointConstants.ENDPOINT_DELETE_SUCCESS,
    payload
  }
}

export const endpointDeleteFailure = (payload) => {
  return {
    type: endpointConstants.ENDPOINT_DELETE_FAILURE,
    payload
  }
}
