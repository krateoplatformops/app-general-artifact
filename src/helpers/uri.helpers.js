const valid = (value) => {
  return new RegExp('https?:\\/\\/.*', 'gm').test(value)
}

export const uriHelper = {
  valid
}
