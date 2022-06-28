import { uiConstants } from '../constants'

const colorByStatus = (status) => {
  status = status.toLowerCase()
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

const borderColorByLevel = (level) => {
  switch (level) {
    case 'info':
      return uiConstants.CHART_COLORS.green
    case 'warn':
      return uiConstants.CHART_COLORS.yellow
    case 'error':
      return uiConstants.CHART_COLORS.red
    default:
      return uiConstants.CHART_COLORS.blue
  }
}

const backgroundColorByLevel = (level, opacity) => {
  switch (level) {
    case 'info':
      return `rgba(79, 191, 104, ${opacity})`
    case 'warn':
      return `rgba(255, 159, 56, ${opacity})`
    case 'error':
      return `rgba(255, 102, 40, ${opacity})`
    default:
      return `rgba(53, 93, 255, ${opacity})`
  }
}

export const uiHelper = {
  colorByStatus,
  colorByWord,
  borderColorByLevel,
  backgroundColorByLevel
}
