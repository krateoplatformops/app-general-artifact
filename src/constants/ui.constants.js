export const uiConstants = {
  dateFormat: 'YYYY MMM DD',
  dateTimeFormat: 'YYYY-MM-DD HH:mm',
  dateTimeSecFormat: 'YYYY-MM-DD HH:mm:ss',
  hourFormat: 'HH:mm',
  dayOfWeek: '0',
  timeToDateInput: 'YYYY-MM-DD',
  routes: { search: 'search' },
  social: [
    {
      icon: 'fa-brands fa-github',
      target: 'https://github.com/krateoplatformops'
    },
    {
      icon: 'fa-brands fa-youtube',
      target: 'https://www.youtube.com/channel/UCJ5JX8xOVzLqzhlCnNuehdQ'
    },
    {
      icon: 'fa-brands fa-discord',
      target: 'https://discord.gg/RzuJWjTg'
    },
    {
      icon: 'fa-solid fa-book',
      target: 'https://krateo.readthedocs.io/en/latest/'
    }
  ],
  support: [
    {
      label: 'Agreement',
      target: 'https://krateo.io/agreement'
    },
    {
      label: 'Privacy Policy',
      target: 'https://krateo.io/privacy'
    },
    {
      label: 'Contact us',
      target: 'https://krateo.io/contact'
    }
  ],
  nav: [
    {
      to: 'dashboard',
      label: 'dashboard',
      icon: 'fa-solid fa-gauge-high'
    },
    {
      to: 'deployments',
      label: 'deployments',
      icon: 'fa-solid fa-rocket'
    },
    {
      to: 'templates',
      label: 'templates',
      icon: 'fa-solid fa-puzzle-piece'
    },
    {
      to: 'packages',
      label: 'packages',
      icon: 'fa-solid fa-cube'
    },
    {
      to: 'register',
      label: 'register',
      icon: 'fa-solid fa-plus'
    },
    {
      to: 'settings',
      label: 'settings',
      icon: 'fa-solid fa-gears'
    }
  ],
  deploymentNav: [
    {
      to: '',
      label: 'overview',
      icon: 'fa-solid fa-file-lines',
      weight: 0
    },
    {
      to: 'events',
      label: 'events',
      icon: 'fa-solid fa-calendar-days',
      weight: 3
    },
    {
      to: 'values',
      label: 'values',
      icon: 'fa-solid fa-code',
      weight: 4
    },
    {
      to: 'settings',
      label: 'settings',
      icon: 'fa-solid fa-gear',
      weight: 5
    }
  ],
  settingsNav: [
    {
      to: '',
      label: 'profile',
      icon: 'fa-solid fa-id-card-clip'
    },
    {
      to: 'endpoints',
      label: 'endpoints',
      icon: 'fa-solid fa-landmark'
    },
    {
      to: 'secrets',
      label: 'secrets',
      icon: 'fa-solid fa-key'
    },
    {
      to: 'components',
      label: 'components',
      icon: 'fa-solid fa-microchip'
    },
    {
      to: 'authentication',
      label: 'authentication',
      icon: 'fa-solid fa-shield-halved'
    }
  ],
  notification: {
    info: 'Info',
    error: 'Error',
    warning: 'Warning',
    success: 'Success'
  },
  messages: {
    template_import_success: 'Template imported successfully',
    template_delete_success: 'Template deleted successfully',
    deployment_create_success: 'Deployment created successfully',
    deployment_delete_success: 'Deployment deleted successfully',
    endpoint_create_success: 'Endpoint created successfully',
    endpoint_delete_success: 'Endpoint deleted successfully',
    proxy_create_success: 'Proxy created successfully',
    proxy_delete_success: 'Proxy deleted successfully',
    deployment_import_success: 'Deployment imported successfully',
    secret_create_success: 'Secret created successfully',
    secret_delete_success: 'Secret deleted successfully',
    update_package_error: 'Update package error',
    login_failure: 'Login failed',
    package_delete_success: 'Package deleted successfully',
    copied: 'Copied to clipboard',
    downloaded: 'File downloaded successfully',
    repository_name_is_required: 'Repository name is required',
    organization_name_is_required: 'Organization name is required',
    strategy_delete_success: 'Strategy deleted successfully',
    strategy_create_success: 'Strategy created successfully',
    unsupported_file: 'Unsupported file',
    unsupported_url: 'Unsupported URL'
  },
  themes: {
    light: 'light',
    dark: 'dark'
  },
  logo: {
    icon: 'icon',
    horizontal: 'horizontal',
    vertical: 'vertical'
  },
  placeholder: {
    search: 'Search'
  },
  proxy: {
    resourceTree: 'resourceTree',
    resourceYaml: 'resourceYaml',
    prometheus: 'prometheus'
  },
  CHART_COLORS: {
    red: 'rgb(255, 99, 132)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    orange: 'rgb(255, 159, 64)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
  },
  kubernetesResources: [
    {
      kind: 'pod',
      icon: 'pod'
    },
    {
      kind: 'service',
      icon: 'svc'
    },
    {
      kind: 'ingress',
      icon: 'ing'
    },
    {
      kind: 'secret',
      icon: 'secret'
    },
    {
      kind: 'configmap',
      icon: 'cm'
    },
    {
      kind: 'deployment',
      icon: 'deploy'
    },
    {
      kind: 'statefulset',
      icon: 'sts'
    },
    {
      kind: 'daemonset',
      icon: 'ds'
    },
    {
      kind: 'job',
      icon: 'job'
    },
    {
      kind: 'cronjob',
      icon: 'cronjob'
    },
    {
      kind: 'networkpolicy',
      icon: 'netpol'
    },
    {
      kind: 'persistentvolumeclaim',
      icon: 'pvc'
    },
    {
      kind: 'persistentvolume',
      icon: 'pv'
    },
    {
      kind: 'storageclass',
      icon: 'sc'
    },
    {
      kind: 'clusterrole',
      icon: 'c-role'
    },
    {
      kind: 'clusterrolebinding',
      icon: 'crb'
    },
    {
      kind: 'role',
      icon: 'role'
    },
    {
      kind: 'rolebinding',
      icon: 'rb'
    },
    {
      kind: 'customresourcedefinition',
      icon: 'crd'
    }
  ],
  colors: ['green', 'orange', 'red', 'yellow', 'blue', 'violet', 'black']
}
