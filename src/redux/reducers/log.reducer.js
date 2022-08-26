import { logConstants } from '../constants'

const initialState = {
  loading: false,
  error: null,
  data: {}
}

export default function log(state = initialState, action) {
  const data = { ...state.data }
  switch (action.type) {
    case logConstants.LOG_FETCH:
      return {
        ...state,
        loading: !(action.payload.silent || false),
        error: null
      }
    case logConstants.LOG_FETCH_SUCCESS:
      data[action.payload.key] = action.payload.value
      return {
        ...state,
        data: data,
        loading: false
      }
    case logConstants.LOG_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case logConstants.LOG_DELETE_KEY:
      delete data[action.payload.key]
      return {
        ...state,
        data: data
      }
    case logConstants.LOG_RESET:
      return {
        ...initialState
      }
    default:
      return state
  }
}
