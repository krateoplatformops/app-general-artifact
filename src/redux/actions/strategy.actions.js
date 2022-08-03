import { strategyConstants } from '../constants'

export const strategyLoad = (payload) => {
  return {
    type: strategyConstants.STRATEGY_LOAD,
    payload
  }
}

export const strategyLoadSuccess = (payload) => {
  return {
    type: strategyConstants.STRATEGY_LOAD_SUCCESS,
    payload
  }
}

export const strategyLoadFailure = (payload) => {
  return {
    type: strategyConstants.STRATEGY_LOAD_FAILURE,
    payload
  }
}

export const strategyReset = () => {
  return {
    type: strategyConstants.STRATEGY_RESET
  }
}

export const strategyCreate = (payload) => {
  return {
    type: strategyConstants.STRATEGY_CREATE,
    payload
  }
}

export const strategyCreateSuccess = (payload) => {
  return {
    type: strategyConstants.STRATEGY_CREATE_SUCCESS,
    payload
  }
}

export const strategyCreateFailure = (payload) => {
  return {
    type: strategyConstants.STRATEGY_CREATE_FAILURE,
    payload
  }
}

export const strategyDelete = (payload) => {
  return {
    type: strategyConstants.STRATEGY_DELETE,
    payload
  }
}

export const strategyDeleteSuccess = (payload) => {
  return {
    type: strategyConstants.STRATEGY_DELETE_SUCCESS,
    payload
  }
}

export const strategyDeleteFailure = (payload) => {
  return {
    type: strategyConstants.STRATEGY_DELETE_FAILURE,
    payload
  }
}
