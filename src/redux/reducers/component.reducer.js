import { componentConstants } from '../constants'

const initialState = {
  loading: false,
  error: null,
  result: false,
  list: null,
  skeletonLoading: false
}

export default function component(state = initialState, action) {
  switch (action.type) {
    case componentConstants.COMPONENT_LOAD:
      return {
        ...state,
        skeletonLoading: true,
        result: false,
        list: null,
        error: null
      }
    case componentConstants.COMPONENT_LOAD_SUCCESS:
      return {
        ...state,
        result: true,
        list: action.payload,
        skeletonLoading: false
      }
    case componentConstants.COMPONENT_LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        skeletonLoading: false,
        result: true,
        error: action.payload
      }
    case componentConstants.COMPONENT_RESET:
      return {
        ...initialState
      }
    default:
      return state
  }
}
