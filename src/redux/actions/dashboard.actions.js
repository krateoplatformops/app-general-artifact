import { dashboardConstants } from '../constants'

export const dashboardLoad = () => {
  return {
    type: dashboardConstants.DASHBOARD_LOAD
  }
}

export const dashboardLoadSuccess = (payload) => {
  return {
    type: dashboardConstants.DASHBOARD_LOAD_SUCCESS,
    payload
  }
}

export const dashboardLoadFailure = (payload) => {
  return {
    type: dashboardConstants.DASHBOARD_LOAD_FAILURE,
    payload
  }
}

export const dashboardReset = () => {
  return {
    type: dashboardConstants.DASHBOARD_RESET
  }
}
