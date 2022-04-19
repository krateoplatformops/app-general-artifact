import { proxyConstants } from '../constants'

export const proxyLoad = (payload) => {
  return {
    type: proxyConstants.PROXY_LOAD,
    payload
  }
}

export const proxyLoadSuccess = (payload) => {
  return {
    type: proxyConstants.PROXY_LOAD_SUCCESS,
    payload
  }
}

export const proxyLoadFailure = (payload) => {
  return {
    type: proxyConstants.PROXY_LOAD_FAILURE,
    payload
  }
}

export const proxyDeleteKey = (payload) => {
  return {
    type: proxyConstants.PROXY_DELETE_KEY,
    payload
  }
}

export const proxyReset = () => {
  return {
    type: proxyConstants.PROXY_RESET
  }
}
