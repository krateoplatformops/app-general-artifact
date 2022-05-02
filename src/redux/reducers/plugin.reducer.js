import { pluginConstants } from '../constants'

const initialState = {
  loading: false,
  error: null,
  data: {}
}

export default function plugin(state = initialState, action) {
  switch (action.type) {
    case pluginConstants.PLUGIN_FETCH:
      const dataLoad = { ...state.data }
      delete dataLoad[action.payload.key]
      return {
        ...state,
        data: dataLoad,
        loading: true
      }
    case pluginConstants.PLUGIN_FETCH_SUCCESS:
      const dataLoadSuccess = { ...state.data }
      dataLoadSuccess[action.payload.key] = action.payload.value
      return {
        ...state,
        data: dataLoadSuccess,
        loading: false
      }
    case pluginConstants.PLUGIN_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case pluginConstants.PLUGIN_DELETE_KEY:
      const dataDelete = { ...state.data }
      delete dataDelete[action.payload.key]
      return {
        ...state,
        data: dataDelete
      }
    case pluginConstants.PLUGIN_RESET:
      return {
        ...initialState
      }
    default:
      return state
  }
}
