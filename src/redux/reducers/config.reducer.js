import { configConstants } from '../constants'

const initialState = {
  loading: false,
  error: null,
  settings: null,
  init: false
}

export default function config(state = initialState, action) {
  switch (action.type) {
    case configConstants.CONFIG_LOAD:
      return {
        ...state,
        loading: true,
        init: true,
        settings: null
      }
    case configConstants.CONFIG_LOAD_SUCCESS:
      return {
        ...state,
        settings: action.payload,
        loading: false
      }
    case configConstants.CONFIG_LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case configConstants.CONFIG_RESET:
      return {
        ...initialState
      }
    default:
      return state
  }
}
