import { userConstants } from '../constants'

const initialState = {
  loading: false,
  error: null,
  profile: null,
  action: null
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case userConstants.USER_LOAD_PROFILE:
      return {
        ...state,
        loading: true,
        profile: null
      }
    case userConstants.USER_LOAD_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        loading: false
      }
    case userConstants.USER_LOAD_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case userConstants.USER_RESET:
      return {
        ...initialState
      }
    default:
      return state
  }
}
