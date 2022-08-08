const uris = {
  apiBase:
    process.env.REACT_APP_API_BASE ||
    window.runConfig.apiBaseUrl +
      (window.runConfig.apiBaseUrl[window.runConfig.apiBaseUrl.length - 1] ===
      '/'
        ? ''
        : '/'),
  auth: process.env.REACT_APP_AUTH || 'auth/auth',
  config: 'config',
  user: process.env.REACT_APP_USER || 'auth/user',
  logout: process.env.REACT_APP_LOGOUT || 'auth/auth/logout',
  register: 'register',
  template: 'template',
  deployment: 'deployment',
  socket:
    window.runConfig.socketUrl +
    (window.runConfig.socketUrl[window.runConfig.socketUrl.length - 1] === '/'
      ? ''
      : '/'),
  proxy: 'proxy',
  endpoint: 'endpoint',
  log: 'log',
  dashboard: 'dashboard',
  package: 'package',
  component: 'component',
  secret: process.env.REACT_APP_SECRET || 'secret',
  catalog:
    'https://raw.githubusercontent.com/krateoplatformops/catalog/main/index.json',
  strategy: 'auth/strategy'
}

if (process.env.REACT_APP_NODE_ENV === 'development') {
  uris.apiBase = 'http://localhost:8087/'
  uris.strategy = 'strategy'
  uris.logout = 'logout'
  uris.auth = 'auth'
  uris.user = 'user'
  uris.secret = ''
}

export default uris
