import { proxyConstants } from '../constants'

const initialState = {
  loading: false,
  error: null,
  data: {}
}

export default function proxy(state = initialState, action) {
  switch (action.type) {
    case proxyConstants.PROXY_FETCH:
      const dataLoad = { ...state.data }
      delete dataLoad[action.payload.key]
      return {
        ...state,
        data: dataLoad,
        loading: true
      }
    case proxyConstants.PROXY_FETCH_SUCCESS:
      const dataLoadSuccess = { ...state.data }
      dataLoadSuccess[action.payload.key] = action.payload.value
      return {
        ...state,
        data: dataLoadSuccess,
        loading: false
      }
    case proxyConstants.PROXY_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case proxyConstants.PROXY_DELETE_KEY:
      const dataDelete = { ...state.data }
      delete dataDelete[action.payload.key]
      return {
        ...state,
        data: dataDelete
      }
    case proxyConstants.PROXY_RESET:
      return {
        ...initialState
      }
    default:
      return state
  }
}
