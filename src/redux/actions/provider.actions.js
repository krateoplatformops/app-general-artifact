import { providerConstants } from '../constants'

export const providerLoad = (payload) => {
  return {
    type: providerConstants.PROVIDER_LOAD,
    payload
  }
}

export const providerLoadSuccess = (payload) => {
  return {
    type: providerConstants.PROVIDER_LOAD_SUCCESS,
    payload
  }
}

export const providerLoadFailure = (payload) => {
  return {
    type: providerConstants.PROVIDER_LOAD_FAILURE,
    payload
  }
}

export const providerReset = () => {
  return {
    type: providerConstants.PROVIDER_RESET
  }
}
