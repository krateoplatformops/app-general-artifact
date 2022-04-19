import uuid from 'react-uuid'

function guid() {
  return uuid()
}

function onlyAlphanumeric(input, lowercase = true) {
  const regex = /[\W_]+/gm
  if (lowercase) {
    input = input.toLowerCase()
  }
  return input.replace(regex, '')
}

export const securityHelper = {
  guid,
  onlyAlphanumeric
}
