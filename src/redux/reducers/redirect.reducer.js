import { redirectConstants } from '../constants'

const initialState = {}

export default function redirect(state = initialState, action) {
  switch (action.type) {
    case redirectConstants.REDIRECT:
      return {
        path: action.payload
      }
    case redirectConstants.REDIRECT_DONE:
      return initialState
    default:
      return state
  }
}
