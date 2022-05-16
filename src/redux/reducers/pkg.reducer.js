import { pkgConstants } from '../constants'

const initialState = {
  loading: false,
  skeletonLoading: false,
  error: null,
  list: null,
  result: false
}

export default function pkg(state = initialState, action) {
  switch (action.type) {
    case pkgConstants.PKG_LOAD:
      return {
        ...state,
        skeletonLoading: true,
        result: false,
        list: null,
        error: null
      }
    case pkgConstants.PKG_LOAD_SUCCESS:
      return {
        ...state,
        result: true,
        list: action.payload.items,
        skeletonLoading: false
      }
    case pkgConstants.PKG_LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        skeletonLoading: false,
        result: true,
        error: action.payload
      }
    case pkgConstants.PKG_RESET:
      return {
        ...initialState
      }
    default:
      return state
  }
}
