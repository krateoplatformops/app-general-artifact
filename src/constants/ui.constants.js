export const uiConstants = {
  dateFormat: 'YYYY MMM DD',
  dateTimeFormat: 'YYYY-MM-DD HH:mm',
  dateTimeSecFormat: 'YYYY-MM-DD HH:mm:ss',
  hourFormat: 'HH:mm',
  dayOfWeek: '0',
  timeToDateInput: 'YYYY-MM-DD',
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
      target: 'https://github.com/krateoplatformops'
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
      icon: 'fa-solid fa-file-lines'
    },
    {
      to: 'resources',
      label: 'resources',
      icon: 'fa-solid fa-network-wired'
    },
    {
      to: 'prometheus',
      label: 'prometheus',
      icon: 'fa-solid fa-fire'
    },
    {
      to: 'security',
      label: 'security',
      icon: 'fa-solid fa-shield'
    },
    {
      to: 'costs',
      label: 'costs',
      icon: 'fa-solid fa-coins'
    },
    {
      to: 'events',
      label: 'events',
      icon: 'fa-solid fa-calendar-days'
    },
    {
      to: 'values',
      label: 'values',
      icon: 'fa-solid fa-code'
    },
    {
      to: 'settings',
      label: 'settings',
      icon: 'fa-solid fa-gear'
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
    host_create_success: 'Host created successfully',
    host_delete_success: 'Host deleted successfully',
    proxy_create_success: 'Proxy created successfully',
    proxy_delete_success: 'Proxy deleted successfully'
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
  availableHostProviders: [
    {
      name: 'endpoint name',
      title: 'endpoint name',
      required: true,
      description: 'Endpoint name'
    },
    // { name: 'token', title: 'token', required: true },
    {
      name: 'target',
      title: 'Target',
      required: true,
      description: 'Must include schema (http or https)',
      pattern: new RegExp(
        '^((ftp|http|https):\\/\\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\\.[a-zA-Z]+)+((\\/)[\\w#]+)*(\\/\\w+\\?[a-zA-Z0-9_]+=\\w+(&[a-zA-Z0-9_]+=\\w+)*)?\\/?$',
        'img'
      )
    }
  ]
  // addProxyFields: [
  //   {
  //     type: 'input',
  //     name: 'base',
  //     title: 'Base Path',
  //     required: true,
  //     description: 'The proxy base path'
  //   },
  //   {
  //     type: 'input',
  //     name: 'target',
  //     title: 'Target full url',
  //     required: true,
  //     description: 'The url of the target with schema',
  //     pattern: new RegExp(
  //       '^((ftp|http|https):\\/\\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\\.[a-zA-Z]+)+((\\/)[\\w#]+)*(\\/\\w+\\?[a-zA-Z0-9_]+=\\w+(&[a-zA-Z0-9_]+=\\w+)*)?\\/?$',
  //       'img'
  //     )
  //   },
  //   {
  //     type: 'area',
  //     name: 'headers',
  //     title: 'Headers',
  //     required: true,
  //     description: 'The json of the headers'
  //   }
  // ]
}
