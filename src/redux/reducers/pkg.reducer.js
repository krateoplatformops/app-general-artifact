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
        skeletonLoading: false,
        loading: false
      }
    case pkgConstants.PKG_LOAD_FAILURE:
    case pkgConstants.PKG_UPDATE_FAILURE:
    case pkgConstants.PKG_ADD_FAILURE:
    case pkgConstants.PKG_DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        skeletonLoading: false,
        result: true,
        error: action.payload
      }
    case pkgConstants.PKG_UPDATE:
    case pkgConstants.PKG_ADD:
    case pkgConstants.PKG_DELETE:
      return {
        ...state,
        loading: true
      }
    case pkgConstants.PKG_UPDATE_SUCCESS:
    case pkgConstants.PKG_ADD_SUCCESS:
    case pkgConstants.PKG_DELETE_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case pkgConstants.PKG_RESET:
      return {
        ...initialState
      }
    default:
      return state
  }
}
