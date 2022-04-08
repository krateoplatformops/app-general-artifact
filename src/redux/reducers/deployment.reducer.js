import { deploymentConstants } from '../constants'

const initialState = {
  loading: false,
  skeletonLoading: false,
  error: null,
  list: null,
  result: false
}

export default function deployment(state = initialState, action) {
  switch (action.type) {
    case deploymentConstants.DEPLOYMENT_LOAD:
      return {
        ...state,
        skeletonLoading: true,
        result: false,
        list: null
      }
    case deploymentConstants.DEPLOYMENT_LOAD_SUCCESS:
      return {
        ...state,
        result: true,
        list: action.payload,
        skeletonLoading: false
      }
    case deploymentConstants.DEPLOYMENT_LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        skeletonLoading: false,
        result: true,
        error: action.payload
      }

    case deploymentConstants.DEPLOYMENT_CREATE:
      return { ...state, loading: true, error: null }
    case deploymentConstants.DEPLOYMENT_CREATE_SUCCESS:
      return { ...state, loading: false, error: null }
    case deploymentConstants.DEPLOYMENT_CREATE_FAILURE:
      return { ...state, error: action.payload, loading: false }
    case deploymentConstants.DEPLOYMENT_RESET:
      return {
        ...initialState
      }
    default:
      return state
  }
}
