import uris from '../uris'

window.Buffer = window.Buffer || require('buffer').Buffer

const createCallUrl = (plugin, d) => {
  let url = `${uris.apiBase}${plugin.type}`
  const t = d.spec.values

  switch (plugin.type) {
    case 'capi':
      url += `/${d.metadata.uid}/kubeconfig`
      break
    case 'pipeline':
    case 'doc':
      url += `/${encodeURIComponent(plugin.endpointName)}`
      url += `/${encodeURIComponent(
        plugin.values.map((x) => {
          if (x.startsWith('[')) return x
          return `[${t.toRepoOrganizationName}][${t.toRepoRepositoryName}]${x}`
        })
      )}`
      break
    case 'kubernetes':
      const id = d.metadata.uid
      if (plugin.value === 'deploymentId') {
        url += `/deploymentId=${id}`
      } else {
        url += '/' + plugin.value
      }
      break
    default:
      if (plugin.endpointName) {
        url += `/${encodeURIComponent(plugin.endpointName)}`
      }
      if (plugin.value) {
        url += `/${encodeURIComponent(plugin.value)}`
      } else if (plugin.values) {
        url += `/${encodeURIComponent(plugin.values)}`
      }
      if (plugin.params) {
        url += `/${encodeURIComponent(JSON.stringify(plugin.params))}`
      }
  }

  return url
}

const to64 = (input) => {
  return Buffer.from(input).toString('base64')
}

const b64toAscii = (input) => {
  return Buffer.from(input, 'base64').toString('ascii')
}

export const pluginHelper = {
  createCallUrl,
  to64,
  b64toAscii
}
