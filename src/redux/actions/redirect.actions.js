import { redirectConstants } from '../constants'

export const redirect = (payload) => {
  return {
    type: redirectConstants.REDIRECT,
    payload
  }
}

export const redirectDone = () => {
  return {
    type: redirectConstants.REDIRECT_DONE
  }
}
