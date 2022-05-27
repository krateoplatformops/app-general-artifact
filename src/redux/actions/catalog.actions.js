import { catalogConstants } from '../constants'

export const catalogLoad = (payload) => {
  return {
    type: catalogConstants.CATALOG_LOAD,
    payload
  }
}

export const catalogLoadSuccess = (payload) => {
  return {
    type: catalogConstants.CATALOG_LOAD_SUCCESS,
    payload
  }
}

export const catalogLoadFailure = (payload) => {
  return {
    type: catalogConstants.CATALOG_LOAD_FAILURE,
    payload
  }
}

export const catalogReset = () => {
  return {
    type: catalogConstants.CATALOG_RESET
  }
}
