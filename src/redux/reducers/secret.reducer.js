import { secretConstants } from '../constants'

const initialState = {
  loading: false,
  error: null,
  result: false,
  list: null,
  skeletonLoading: false
}

export default function secret(state = initialState, action) {
  switch (action.type) {
    case secretConstants.SECRET_LOAD:
      return {
        ...state,
        skeletonLoading: true,
        result: false,
        list: null,
        error: null
      }
    case secretConstants.SECRET_LOAD_SUCCESS:
      return {
        ...state,
        result: true,
        list: action.payload.list,
        skeletonLoading: false
      }
    case secretConstants.SECRET_LOAD_FAILURE:
    case secretConstants.SECRET_CREATE_FAILURE:
    case secretConstants.SECRET_DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        skeletonLoading: false,
        result: true,
        error: action.payload
      }
    case secretConstants.SECRET_CREATE:
    case secretConstants.SECRET_DELETE:
      return { ...state, loading: true, error: null }
    case secretConstants.SECRET_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        list:
          state.list === null
            ? [action.payload]
            : state.list.concat(action.payload)
      }
    case secretConstants.SECRET_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        list: state.list.filter((x) => x.friendlyName !== action.payload)
      }
    case secretConstants.SECRET_RESET:
      return {
        ...initialState
      }
    default:
      return state
  }
}
