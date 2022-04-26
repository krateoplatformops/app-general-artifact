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

export const proxyCreate = (payload) => {
  return {
    type: proxyConstants.PROXY_CREATE,
    payload
  }
}

export const proxyCreateSuccess = (payload) => {
  return {
    type: proxyConstants.PROXY_CREATE_SUCCESS,
    payload
  }
}

export const proxyCreateFailure = (payload) => {
  return {
    type: proxyConstants.PROXY_CREATE_FAILURE,
    payload
  }
}

export const proxyDelete = (payload) => {
  return {
    type: proxyConstants.PROXY_DELETE,
    payload
  }
}

export const proxyDeleteSuccess = (payload) => {
  return {
    type: proxyConstants.PROXY_DELETE_SUCCESS,
    payload
  }
}

export const proxyDeleteFailure = (payload) => {
  return {
    type: proxyConstants.PROXY_DELETE_FAILURE,
    payload
  }
}
