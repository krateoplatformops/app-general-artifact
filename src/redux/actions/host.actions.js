import { hostConstants } from '../constants'

export const hostLoad = (payload) => {
  return {
    type: hostConstants.HOST_LOAD,
    payload
  }
}

export const hostLoadSuccess = (payload) => {
  return {
    type: hostConstants.HOST_LOAD_SUCCESS,
    payload
  }
}

export const hostLoadFailure = (payload) => {
  return {
    type: hostConstants.HOST_LOAD_FAILURE,
    payload
  }
}

export const hostReset = () => {
  return {
    type: hostConstants.HOST_RESET
  }
}

export const hostCreate = (payload) => {
  return {
    type: hostConstants.HOST_CREATE,
    payload
  }
}

export const hostCreateSuccess = (payload) => {
  return {
    type: hostConstants.HOST_CREATE_SUCCESS,
    payload
  }
}

export const hostCreateFailure = (payload) => {
  return {
    type: hostConstants.HOST_CREATE_FAILURE,
    payload
  }
}

export const hostDelete = (payload) => {
  return {
    type: hostConstants.HOST_DELETE,
    payload
  }
}

export const hostDeleteSuccess = (payload) => {
  return {
    type: hostConstants.HOST_DELETE_SUCCESS,
    payload
  }
}

export const hostDeleteFailure = (payload) => {
  return {
    type: hostConstants.HOST_DELETE_FAILURE,
    payload
  }
}
