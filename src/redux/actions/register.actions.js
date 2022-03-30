import { registerConstants } from '../constants'

export const registerImport = (payload) => {
  return {
    type: registerConstants.REGISTER_IMPORT,
    payload
  }
}

export const registerImportSuccess = () => {
  return {
    type: registerConstants.REGISTER_IMPORT_SUCCESS
  }
}

export const registerImportFailure = (payload) => {
  return {
    type: registerConstants.REGISTER_IMPORT_FAILURE,
    payload
  }
}

export const registerReset = () => {
  return {
    type: registerConstants.REGISTER_RESET
  }
}
