import { pluginConstants } from '../constants'

export const pluginFetch = (payload) => {
  return {
    type: pluginConstants.PLUGIN_FETCH,
    payload
  }
}

export const pluginFetchSuccess = (payload) => {
  return {
    type: pluginConstants.PLUGIN_FETCH_SUCCESS,
    payload
  }
}

export const pluginFetchFailure = (payload) => {
  return {
    type: pluginConstants.PLUGIN_FETCH_FAILURE,
    payload
  }
}

export const pluginDeleteKey = (payload) => {
  return {
    type: pluginConstants.PLUGIN_DELETE_KEY,
    payload
  }
}

export const pluginReset = () => {
  return {
    type: pluginConstants.PLUGIN_RESET
  }
}
