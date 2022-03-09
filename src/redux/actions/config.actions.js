import { configConstants } from '../constants'

export const configLoad = (payload) => {
  return {
    type: configConstants.CONFIG_LOAD,
    payload
  }
}

export const configLoadSuccess = (payload) => {
  return {
    type: configConstants.CONFIG_LOAD_SUCCESS,
    payload
  }
}

export const configLoadFailure = (payload) => {
  return {
    type: configConstants.CONFIG_LOAD_FAILURE,
    payload
  }
}

export const configReset = () => {
  return {
    type: configConstants.CONFIG_RESET
  }
}
