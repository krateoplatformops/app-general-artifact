import { pkgConstants } from '../constants'

export const pkgLoadSilent = () => {
  return {
    type: pkgConstants.PKG_LOAD_SILENT
  }
}

export const pkgLoad = () => {
  return {
    type: pkgConstants.PKG_LOAD
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

export const pkgUpdate = (payload) => {
  return {
    type: pkgConstants.PKG_UPDATE,
    payload
  }
}

export const pkgUpdateSuccess = () => {
  return {
    type: pkgConstants.PKG_UPDATE_SUCCESS
  }
}

export const pkgUpdateFailure = (payload) => {
  return {
    type: pkgConstants.PKG_UPDATE_FAILURE,
    payload
  }
}
