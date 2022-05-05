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

const colorByWord = (word) => {
  const index = word.length % Object.keys(uiConstants.CHART_COLORS).length
  return uiConstants.CHART_COLORS[Object.keys(uiConstants.CHART_COLORS)[index]]
}

export const uiHelper = {
  colorByStatus,
  colorByWord
}
