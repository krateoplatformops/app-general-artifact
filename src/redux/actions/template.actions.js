import { templateConstants } from '../constants'

export const templateLoad = (payload) => {
  return {
    type: templateConstants.TEMPLATE_LOAD,
    payload
  }
}

export const templateLoadSuccess = (payload) => {
  return {
    type: templateConstants.TEMPLATE_LOAD_SUCCESS,
    payload
  }
}

export const templateLoadFailure = (payload) => {
  return {
    type: templateConstants.TEMPLATE_LOAD_FAILURE,
    payload
  }
}

export const templateUpdate = (payload) => {
  return {
    type: templateConstants.TEMPLATE_UPDATE,
    payload
  }
}

export const templateReset = () => {
  return {
    type: templateConstants.TEMPLATE_RESET
  }
}

export const templateDelete = (payload) => {
  return {
    type: templateConstants.TEMPLATE_DELETE,
    payload
  }
}

export const templateDeleteSuccess = (payload) => {
  return {
    type: templateConstants.TEMPLATE_DELETE_SUCCESS,
    payload
  }
}

export const templateDeleteFailure = (payload) => {
  return {
    type: templateConstants.TEMPLATE_DELETE_FAILURE,
    payload
  }
}
