import { pluginConstants } from '../constants'

const initialState = {
  loading: false,
  error: null,
  data: {}
}

export default function plugin(state = initialState, action) {
  const data = { ...state.data }
  switch (action.type) {
    case pluginConstants.PLUGIN_FETCH:
      return {
        ...state,
        loading: true,
        error: null
      }
    case pluginConstants.PLUGIN_FETCH_SUCCESS:
      data[action.payload.key] = action.payload.value
      return {
        ...state,
        data: data,
        loading: false
      }
    case pluginConstants.PLUGIN_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case pluginConstants.PLUGIN_DELETE_KEY:
      delete data[action.payload.key]
      return {
        ...state,
        data: data
      }
    case pluginConstants.PLUGIN_RESET:
      return {
        ...initialState
      }
    default:
      return state
  }
}
