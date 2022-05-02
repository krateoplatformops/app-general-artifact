import { uiConstants } from '../constants'

const colorByStatus = (status) => {
  if (status.indexOf('fail') > -1) {
    return uiConstants.CHART_COLORS.red
  }
  if (status.indexOf('success') > -1) {
    return uiConstants.CHART_COLORS.green
  }
  if (status.indexOf('queue') > -1) {
    return uiConstants.CHART_COLORS.yellow
  }
  if (status.indexOf('running') > -1) {
    return uiConstants.CHART_COLORS.blue
  }
  return uiConstants.CHART_COLORS.purple
}

export const uiHelper = {
  colorByStatus
}
