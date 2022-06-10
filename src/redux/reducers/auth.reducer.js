import { authConstants } from '../constants'

const initialState = {
  error: null,
  loading: false
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case authConstants.AUTH_LOGIN:
    case authConstants.AUTH_LOGOUT:
      return { ...state, loading: true, error: null }
    case authConstants.AUTH_LOGIN_SUCCESS:
    case authConstants.AUTH_LOGOUT_SUCCESS:
      return { ...state, loading: false, error: null }
    case authConstants.AUTH_LOGIN_FAILURE:
    case authConstants.AUTH_LOGOUT_FAILURE:
      return { ...state, error: action.payload, loading: false }
    default:
      return state
  }
}
