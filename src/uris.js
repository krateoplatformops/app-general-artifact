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
  logout: process.env.REACT_APP_LOGOUT || 'auth/logout',
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
  secret: 'secret',
  catalog:
    'https://raw.githubusercontent.com/krateoplatformops/catalog/main/index.json',
  strategy: process.env.REACT_APP_STRATEGY || 'auth/strategy'
}

export default uris
