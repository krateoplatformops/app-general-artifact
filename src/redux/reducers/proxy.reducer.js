import { proxyConstants } from '../constants'

const initialState = {
  loading: false,
  error: null,
  data: {},
  result: false,
  list: null,
  skeletonLoading: false
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
    case proxyConstants.PROXY_LOAD:
      return {
        ...state,
        skeletonLoading: true,
        result: false,
        list: null
      }
    case proxyConstants.PROXY_LOAD_SUCCESS:
      return {
        ...state,
        result: true,
        list: action.payload,
        skeletonLoading: false
      }
    case proxyConstants.PROXY_LOAD_FAILURE:
    case proxyConstants.PROXY_CREATE_FAILURE:
    case proxyConstants.PROXY_DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        skeletonLoading: false,
        result: true,
        error: action.payload
      }
    case proxyConstants.PROXY_CREATE:
    case proxyConstants.PROXY_DELETE:
      return { ...state, loading: true, error: null }
    case proxyConstants.PROXY_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        list:
          state.list === null
            ? [action.payload]
            : state.list.concat(action.payload)
      }
    case proxyConstants.PROXY_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        list: state.list.filter((x) => x._id !== action.payload)
      }
    case proxyConstants.PROXY_RESET:
      return {
        ...initialState
      }
    default:
      return state
  }
}
