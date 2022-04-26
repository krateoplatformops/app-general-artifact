const beautifyJson = (value) => {
  try {
    const regex = /'/gm
    const result = value.replace(regex, '"')
    return JSON.parse(
      result.replace(/([{,])(\s*)([A-Za-z0-9_\\-]+?)\s*:/g, '$1"$3":')
    )
  } catch (e) {
    return null
  }
}

const validateJson = (value) => {
  try {
    if (!beautifyJson(value)) return false
    return true
  } catch (e) {
    return false
  }
}

export const stringHelper = {
  beautifyJson,
  validateJson
}
