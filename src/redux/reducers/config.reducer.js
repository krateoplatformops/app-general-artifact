import { configConstants } from '../constants'

const initialState = {
  loading: false,
  error: null,
  settings: {},
  result: false
}

export default function config(state = initialState, action) {
  switch (action.type) {
    case configConstants.CONFIG_LOAD:
      return {
        ...state,
        loading: true,
        result: false,
        settings: {}
      }
    case configConstants.CONFIG_LOAD_SUCCESS:
      return {
        ...state,
        result: true,
        settings: action.payload,
        loading: false
      }
    case configConstants.CONFIG_LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        result: true,
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
