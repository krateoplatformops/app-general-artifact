export const uiConstants = {
  dateFormat: 'YYYY MMM DD',
  dateTimeFormat: 'YYYY-MM-DD HH:mm',
  dateTimeSecFormat: 'YYYY-MM-DD HH:mm:ss',
  hourFormat: 'HH:mm',
  dayOfWeek: '0',
  timeToDateInput: 'YYYY-MM-DD',
  status: {
    success: 'SUCCESS'
  },
  nav: [
    {
      to: 'dashboard',
      label: 'dashboard',
      icon: 'fas fa-tachometer-alt',
      onlyAdmin: false
    },
    {
      to: 'projects',
      label: 'projects',
      icon: 'fa-solid fa-code-branch',
      onlyAdmin: false
    },
    {
      to: 'insights',
      label: 'insights',
      icon: 'fa-solid fa-chart-column',
      onlyAdmin: false
    },
    {
      to: 'history',
      label: 'history',
      icon: 'fa-solid fa-history',
      onlyAdmin: false
    },
    {
      to: 'logs',
      label: 'logs',
      icon: 'fa-solid fa-list-ul',
      onlyAdmin: false
    },
    {
      to: 'users',
      label: 'users',
      icon: 'fa-solid fa-users',
      onlyAdmin: true
    }
  ],
  bottomNav: [
    {
      to: 'settings',
      label: 'settings',
      icon: 'fa-solid fa-gear',
      onlyAdmin: false
    }
  ],
  logout: {
    label: 'logout',
    icon: 'fa-solid fa-right-from-bracket'
  },
  notification: {
    info: 'Info',
    error: 'Error',
    warning: 'Warning',
    success: 'Success'
  },
  logLevel: {
    debug: 'debug',
    error: 'error',
    warning: 'warning',
    info: 'info'
  },
  messages: {
    login_failure: 'Login failure, retry',
    project_add_success: 'Project added successfully',
    project_update_success: 'Project updated successfully',
    project_delete_success: 'Project deleted successfully',
    network_error: 'Network error, retry',
    password_change_success: 'Password changed successfully',
    user_update_success: 'User updated successfully',
    user_delete_success: 'User deleted successfully',
    user_add_success: 'User added successfully'
  },
  providers: [
    { label: 'GitHub', to: 'github', icon: 'github', enabled: true },
    { label: 'GitLab', to: 'gitlab', icon: 'gitlab', enabled: true },
    { label: 'Google', to: 'google', icon: 'google', enabled: true },
    { label: 'AWS', to: 'aws', icon: 'aws', enabled: false },
    { label: 'Azure', to: 'azure', icon: 'azure', enabled: false },
    { label: 'Bitbucket', to: 'bitbucket', icon: 'bitbucket', enabled: false },
    { label: 'Buddy', to: 'buddy', icon: 'buddy', enabled: false },
    { label: 'Jenkins', to: 'jenkins', icon: 'jenkins', enabled: false },
    { label: 'Travis-ci', to: 'travis-ci', icon: 'travis-ci', enabled: false }
  ],
  themes: {
    light: 'light',
    dark: 'dark'
  },
  scan: [
    { label: 'manual', value: 0 },
    { label: '5 m', value: 300 },
    { label: '10 m', value: 600 },
    { label: '15 m', value: 900 },
    { label: '30 m', value: 1800 },
    { label: '60 m', value: 3600 },
    { label: '2 h', value: 7200 },
    { label: '4 h', value: 14400 },
    { label: '6 h', value: 21600 },
    { label: '12 h', value: 43200 }
  ],
  placeholders: {
    username: 'Username',
    // deepcode ignore NoHardcodedPasswords: not a password, it's a placeholder
    password: 'Password',
    search_available_pipelines: 'Search on available pipelines',
    search_project: 'Search project',
    search_dashboard: 'Search project, repository or pipeline',
    search_insight: 'Search project',
    confirmPassword: 'Confirm password',
    search_users: 'Search users'
  },
  roles: [
    { label: 'admin', value: 'admin' },
    { label: 'user', value: 'user' },
    { label: 'service account', value: 'service-account' }
  ]
}
