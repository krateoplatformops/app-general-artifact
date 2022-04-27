import { proxyConstants } from '../constants'

export const proxyFetch = (payload) => {
  return {
    type: proxyConstants.PROXY_FETCH,
    payload
  }
}

export const proxyFetchSuccess = (payload) => {
  return {
    type: proxyConstants.PROXY_FETCH_SUCCESS,
    payload
  }
}

export const proxyFetchFailure = (payload) => {
  return {
    type: proxyConstants.PROXY_FETCH_FAILURE,
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
