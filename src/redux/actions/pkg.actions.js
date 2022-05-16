import { pkgConstants } from '../constants'

export const pkgLoad = (payload) => {
  return {
    type: pkgConstants.PKG_LOAD,
    payload
  }
}

export const pkgLoadSuccess = (payload) => {
  return {
    type: pkgConstants.PKG_LOAD_SUCCESS,
    payload
  }
}

export const pkgLoadFailure = (payload) => {
  return {
    type: pkgConstants.PKG_LOAD_FAILURE,
    payload
  }
}

export const pkgReset = () => {
  return {
    type: pkgConstants.PKG_RESET
  }
}
