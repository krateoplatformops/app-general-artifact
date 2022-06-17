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

export const pkgAdd = (payload) => {
  return {
    type: pkgConstants.PKG_ADD,
    payload
  }
}

export const pkgAddSuccess = () => {
  return {
    type: pkgConstants.PKG_ADD_SUCCESS
  }
}

export const pkgAddFailure = (payload) => {
  return {
    type: pkgConstants.PKG_ADD_FAILURE,
    payload
  }
}

export const pkgDelete = (payload) => {
  return {
    type: pkgConstants.PKG_DELETE,
    payload
  }
}

export const pkgDeleteSuccess = () => {
  return {
    type: pkgConstants.PKG_DELETE_SUCCESS
  }
}

export const pkgDeleteFailure = (payload) => {
  return {
    type: pkgConstants.PKG_DELETE_FAILURE,
    payload
  }
}
