import { endpointConstants } from '../constants'

const initialState = {
  loading: false,
  error: null,
  result: false,
  list: null,
  skeletonLoading: false
}

export default function endpoint(state = initialState, action) {
  switch (action.type) {
    case endpointConstants.ENDPOINT_LOAD:
      return {
        ...state,
        skeletonLoading: true,
        result: false,
        list: null,
        error: null
      }
    case endpointConstants.ENDPOINT_LOAD_SUCCESS:
      return {
        ...state,
        result: true,
        list: action.payload.list,
        skeletonLoading: false
      }
    case endpointConstants.ENDPOINT_LOAD_FAILURE:
    case endpointConstants.ENDPOINT_CREATE_FAILURE:
    case endpointConstants.ENDPOINT_DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        skeletonLoading: false,
        result: true,
        error: action.payload
      }
    case endpointConstants.ENDPOINT_CREATE:
    case endpointConstants.ENDPOINT_DELETE:
      return { ...state, loading: true, error: null }
    case endpointConstants.ENDPOINT_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        list:
          state.list === null
            ? [action.payload]
            : state.list.concat(action.payload)
      }
    case endpointConstants.ENDPOINT_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        list: state.list.filter((x) => x.friendlyName !== action.payload)
      }
    case endpointConstants.ENDPOINT_RESET:
      return {
        ...initialState
      }
    default:
      return state
  }
}
