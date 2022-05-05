import { uiConstants } from '../constants'

const resourceIcon = (kind) => {
  const unknown = uiConstants.kubernetesResources.find(
    (x) => x.kind === 'customresourcedefinition'
  )
  if (!kind) return unknown.icon
  const resource = uiConstants.kubernetesResources.find(
    (x) => x.kind === kind.toLowerCase()
  )
  if (resource) {
    return resource.icon
  }
  return unknown.icon
}

const iconColor = (status) => {
  switch (status) {
    case 'Healthy':
      return 'Healthy'
    case 'Progressing':
      return 'Progressing'
    case 'Unhealthy':
      return 'Unhealthy'
    default:
      return 'Unknown'
  }
}

export const flowHelper = {
  resourceIcon,
  iconColor
}
