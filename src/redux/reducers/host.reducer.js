import { hostConstants } from '../constants'

const initialState = {
  loading: false,
  error: null,
  result: false
}

export default function host(state = initialState, action) {
  switch (action.type) {
    case hostConstants.HOST_LOAD:
      return {
        ...state,
        skeletonLoading: true,
        result: false,
        list: null
      }
    case hostConstants.HOST_LOAD_SUCCESS:
      return {
        ...state,
        result: true,
        list: action.payload,
        skeletonLoading: false
      }
    case hostConstants.HOST_LOAD_FAILURE:
    case hostConstants.HOST_CREATE_FAILURE:
    case hostConstants.HOST_DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        skeletonLoading: false,
        result: true,
        error: action.payload
      }

    case hostConstants.HOST_CREATE:
    case hostConstants.HOST_DELETE:
      return { ...state, loading: true, error: null }
    case hostConstants.HOST_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        list:
          state.list === null
            ? [action.payload]
            : state.list.concat(action.payload)
      }
    case hostConstants.HOST_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        list: state.list.filter((x) => x._id !== action.payload)
      }
    case hostConstants.HOST_RESET:
      return {
        ...initialState
      }

    default:
      return state
  }
}
