import uris from '../uris'

const createCallUrl = (deploy, plugin) => {
  return `${uris.apiBase}${uris.deployment}/${deploy._id}/plugins/${plugin.type}/${plugin.name}`
}

export const pluginHelper = {
  createCallUrl
}
