import { logConstants } from '../constants'

export const logFetch = (payload) => {
  return {
    type: logConstants.LOG_FETCH,
    payload
  }
}

export const logFetchSuccess = (payload) => {
  return {
    type: logConstants.LOG_FETCH_SUCCESS,
    payload
  }
}

export const logFetchFailure = (payload) => {
  return {
    type: logConstants.LOG_FETCH_FAILURE,
    payload
  }
}

export const logDeleteKey = (payload) => {
  return {
    type: logConstants.LOG_DELETE_KEY,
    payload
  }
}

export const logReset = () => {
  return {
    type: logConstants.LOG_RESET
  }
}
