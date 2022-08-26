import { proxyConstants } from '../constants'

const initialState = {
  loading: false,
  error: null,
  data: {}
}

export default function proxy(state = initialState, action) {
  const data = { ...state.data }
  switch (action.type) {
    case proxyConstants.PROXY_FETCH:
      delete data[action.payload.key]
      return {
        ...state,
        loading: true,
        error: null
      }
    case proxyConstants.PROXY_FETCH_SUCCESS:
      data[action.payload.key] = action.payload.value
      return {
        ...state,
        data: data,
        loading: false
      }
    case proxyConstants.PROXY_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case proxyConstants.PROXY_DELETE_KEY:
      delete data[action.payload.key]
      return {
        ...state,
        data: data
      }
    case proxyConstants.PROXY_RESET:
      return {
        ...initialState
      }
    default:
      return state
  }
}
