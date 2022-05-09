import { providerConstants } from '../constants'

const initialState = {
  loading: false,
  skeletonLoading: false,
  error: null,
  list: null,
  result: false
}

export default function provider(state = initialState, action) {
  switch (action.type) {
    case providerConstants.PROVIDER_LOAD:
      return {
        ...state,
        skeletonLoading: true,
        result: false,
        list: null,
        error: null
      }
    case providerConstants.PROVIDER_LOAD_SUCCESS:
      return {
        ...state,
        result: true,
        list: action.payload.providers,
        skeletonLoading: false
      }
    case providerConstants.PROVIDER_LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        skeletonLoading: false,
        result: true,
        error: action.payload
      }
    case providerConstants.PROVIDER_RESET:
      return {
        ...initialState
      }
    default:
      return state
  }
}
