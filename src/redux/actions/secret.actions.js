import { secretConstants } from '../constants'

export const secretLoad = (payload) => {
  return {
    type: secretConstants.SECRET_LOAD,
    payload
  }
}

export const secretLoadSuccess = (payload) => {
  return {
    type: secretConstants.SECRET_LOAD_SUCCESS,
    payload
  }
}

export const secretLoadFailure = (payload) => {
  return {
    type: secretConstants.SECRET_LOAD_FAILURE,
    payload
  }
}

export const secretReset = () => {
  return {
    type: secretConstants.SECRET_RESET
  }
}

export const secretCreate = (payload) => {
  return {
    type: secretConstants.SECRET_CREATE,
    payload
  }
}

export const secretCreateSuccess = (payload) => {
  return {
    type: secretConstants.SECRET_CREATE_SUCCESS,
    payload
  }
}

export const secretCreateFailure = (payload) => {
  return {
    type: secretConstants.SECRET_CREATE_FAILURE,
    payload
  }
}

export const secretDelete = (payload) => {
  return {
    type: secretConstants.SECRET_DELETE,
    payload
  }
}

export const secretDeleteSuccess = (payload) => {
  return {
    type: secretConstants.SECRET_DELETE_SUCCESS,
    payload
  }
}

export const secretDeleteFailure = (payload) => {
  return {
    type: secretConstants.SECRET_DELETE_FAILURE,
    payload
  }
}
