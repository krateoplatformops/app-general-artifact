import uris from '../uris'

const createCallUrl = (plugin) => {
  let url = `${uris.apiBase}${plugin.type}`

  if (plugin.endpointName) {
    url += `/${encodeURIComponent(plugin.endpointName)}`
  }
  if (plugin.value) {
    url += `/${encodeURIComponent(plugin.value)})`
  } else if (plugin.values) {
    url += `/${encodeURIComponent(plugin.values)}`
  }
  if (plugin.params) {
    url += `/${encodeURIComponent(JSON.stringify(plugin.params))}`
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
