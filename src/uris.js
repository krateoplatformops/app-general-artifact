const uris = {
  apiBase:
    window.runConfig.apiBaseUrl +
    (window.runConfig.apiBaseUrl[window.runConfig.apiBaseUrl.length - 1] === '/'
      ? ''
      : '/'),
  auth: 'auth/auth',
  config: 'config',
  user: 'auth/user',
  logout: 'auth/auth/logout',
  register: 'register',
  template: 'template',
  deployment: 'deployment',
  notification:
    window.runConfig.notificationUrl +
    (window.runConfig.notificationUrl[
      window.runConfig.notificationUrl.length - 1
    ] === '/'
      ? ''
      : '/'),
  proxy: 'proxy',
  log: 'event',
  dashboard: 'dashboard',
  package: 'package',
  component: 'component',
  secret: 'secret',
  catalog:
    'https://raw.githubusercontent.com/krateoplatformops/catalog/main/index.json',
  strategy: 'auth/strategy'
}

if (process.env.REACT_APP_NODE_ENV === 'development') {
  uris.apiBase = process.env.REACT_APP_API_URL
}

export default uris
