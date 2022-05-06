import { dashboardConstants } from '../constants'

const initialState = {
  loading: false,
  error: null,
  list: null,
  result: false
}

export default function dashboard(state = initialState, action) {
  switch (action.type) {
    case dashboardConstants.DASHBOARD_LOAD:
      return {
        ...state,
        loading: true,
        result: false,
        list: null
      }
    case dashboardConstants.DASHBOARD_LOAD_SUCCESS:
      return {
        ...state,
        result: true,
        list: action.payload,
        loading: false
      }
    case dashboardConstants.DASHBOARD_LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        result: true,
        error: action.payload
      }
    case dashboardConstants.DASHBOARD_RESET:
      return {
        ...initialState
      }
    default:
      return state
  }
}
