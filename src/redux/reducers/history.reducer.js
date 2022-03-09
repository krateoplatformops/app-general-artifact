import { historyConstants } from '../constants'

const initialState = {
  loading: false,
  error: null,
  list: null,
  result: false
}

export default function history(state = initialState, action) {
  switch (action.type) {
    case historyConstants.HISTORY_LOAD:
      return {
        ...state,
        loading: true,
        result: false,
        list: null
      }
    case historyConstants.HISTORY_LOAD_SUCCESS:
      return {
        ...state,
        result: true,
        list: action.payload,
        loading: false
      }
    case historyConstants.HISTORY_LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        result: true,
        error: action.payload
      }
    case historyConstants.HISTORY_RESET:
      return {
        ...initialState
      }
    default:
      return state
  }
}
