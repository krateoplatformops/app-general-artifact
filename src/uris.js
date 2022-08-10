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
  socket:
    window.runConfig.socketUrl +
    (window.runConfig.socketUrl[window.runConfig.socketUrl.length - 1] === '/'
      ? ''
      : '/'),
  proxy: 'proxy',
  log: 'log',
  dashboard: 'dashboard',
  package: 'package',
  component: 'component',
  secret: 'secret',
  catalog:
    'https://raw.githubusercontent.com/krateoplatformops/catalog/main/index.json',
  strategy: 'auth/strategy'
}

if (process.env.REACT_APP_NODE_ENV === 'development') {
  uris.apiBase = 'http://localhost:8085/'
  uris.strategy = 'strategy'
  uris.logout = 'logout'
  uris.auth = 'auth'
  uris.user = 'user'
  uris.secret = ''
  uris.deployment = ''
}

export default uris
