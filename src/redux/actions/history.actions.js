import { historyConstants } from '../constants'

export const historyLoad = (payload) => {
  return {
    type: historyConstants.HISTORY_LOAD,
    payload
  }
}

export const historyLoadSuccess = (payload) => {
  return {
    type: historyConstants.HISTORY_LOAD_SUCCESS,
    payload
  }
}

export const historyLoadFailure = (payload) => {
  return {
    type: historyConstants.HISTORY_LOAD_FAILURE,
    payload
  }
}

export const historyReset = () => {
  return {
    type: historyConstants.HISTORY_RESET
  }
}
