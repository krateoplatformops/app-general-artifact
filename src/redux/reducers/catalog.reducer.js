import { catalogConstants } from '../constants'

const initialState = {
  loading: false,
  error: null,
  result: false,
  list: null
}

export default function catalog(state = initialState, action) {
  switch (action.type) {
    case catalogConstants.CATALOG_LOAD:
      return {
        ...state,
        loading: true,
        result: false,
        list: null,
        error: null
      }
    case catalogConstants.CATALOG_LOAD_SUCCESS:
      return {
        ...state,
        result: true,
        loading: false,
        list: action.payload
      }
    case catalogConstants.CATALOG_LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        result: true,
        error: action.payload
      }
    case catalogConstants.CATALOG_RESET:
      return {
        ...initialState
      }
    default:
      return state
  }
}
