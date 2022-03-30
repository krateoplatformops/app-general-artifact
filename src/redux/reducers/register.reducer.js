import { registerConstants } from '../constants'

const initialState = {
  loading: false,
  error: null,
  result: false
}

export default function register(state = initialState, action) {
  switch (action.type) {
    case registerConstants.REGISTER_IMPORT:
      return {
        ...state,
        loading: true,
        result: false
      }
    case registerConstants.REGISTER_IMPORT_SUCCESS:
      return {
        ...state,
        result: true,
        loading: false
      }
    case registerConstants.REGISTER_IMPORT_FAILURE:
      return {
        ...state,
        loading: false,
        result: true,
        error: action.payload
      }
    case registerConstants.REGISTER_RESET:
      return {
        ...initialState
      }
    default:
      return state
  }
}
