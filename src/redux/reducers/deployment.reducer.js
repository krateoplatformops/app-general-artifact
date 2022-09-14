import { deploymentConstants } from '../constants'

const initialState = {
  loading: false,
  skeletonLoading: false,
  error: null,
  list: null,
  count: null,
  result: false,
  resources: null
}

export default function deployment(state = initialState, action) {
  switch (action.type) {
    case deploymentConstants.DEPLOYMENT_LOAD:
      return {
        ...state,
        skeletonLoading: true,
        result: false,
        list: null,
        count: null,
        error: null
      }
    case deploymentConstants.DEPLOYMENT_SINGLE_LOAD:
      return {
        ...state,
        loading: !(action.payload.silent || false)
      }
    case deploymentConstants.DEPLOYMENT_LOAD_SUCCESS:
      return {
        ...state,
        result: true,
        list: action.payload.list,
        count: action.payload.count,
        skeletonLoading: false
      }
    case deploymentConstants.DEPLOYMENT_LOAD_FAILURE:
    case deploymentConstants.DEPLOYMENT_CREATE_FAILURE:
    case deploymentConstants.DEPLOYMENT_DELETE_FAILURE:
    case deploymentConstants.DEPLOYMENT_SINGLE_LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        skeletonLoading: false,
        result: true,
        error: action.payload
      }
    case deploymentConstants.DEPLOYMENT_CREATE:
    case deploymentConstants.DEPLOYMENT_DELETE:
      return { ...state, loading: true, error: null }
    case deploymentConstants.DEPLOYMENT_CREATE_SUCCESS:
    case deploymentConstants.DEPLOYMENT_SINGLE_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        list:
          state.list === null
            ? [action.payload]
            : state.list.findIndex((x) => x._id === action.payload._id) === -1
            ? state.list.concat(action.payload)
            : state.list.map((item) => {
                return item._id === action.payload._id ? action.payload : item
              })
      }
    case deploymentConstants.DEPLOYMENT_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        list: state.list.filter((x) => x._id !== action.payload),
        count: state.count - 1
      }
    case deploymentConstants.DEPLOYMENT_RESET:
      return {
        ...initialState
      }
    default:
      return state
  }
}
