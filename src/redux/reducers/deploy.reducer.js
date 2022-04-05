import { deployConstants } from '../constants'

const initialState = {
  error: null,
  loading: false
}

export default function deploy(state = initialState, action) {
  switch (action.type) {
    case deployConstants.DEPLOY_CREATE:
      return { ...state, loading: true, error: null }
    case deployConstants.DEPLOY_CREATE_SUCCESS:
      return { ...state, loading: false, error: null }
    case deployConstants.DEPLOY_CREATE_FAILURE:
      return { ...state, error: action.payload, loading: false }
    case deployConstants.DEPLOY_RESET:
      return {
        ...initialState
      }
    default:
      return state
  }
}
