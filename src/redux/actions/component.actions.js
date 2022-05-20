import { componentConstants } from '../constants'

export const componentLoad = (payload) => {
  return {
    type: componentConstants.COMPONENT_LOAD,
    payload
  }
}

export const componentLoadSuccess = (payload) => {
  return {
    type: componentConstants.COMPONENT_LOAD_SUCCESS,
    payload
  }
}

export const componentLoadFailure = (payload) => {
  return {
    type: componentConstants.COMPONENT_LOAD_FAILURE,
    payload
  }
}

export const componentReset = () => {
  return {
    type: componentConstants.COMPONENT_RESET
  }
}
