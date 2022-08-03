export const strategyUIConstants = {
  types: [
    {
      strategy: 'guest',
      type: 'redirect',
      fields: []
    },
    {
      strategy: 'github',
      type: 'redirect',
      fields: [
        {
          title: 'Client ID',
          name: 'clientID',
          type: 'password',
          description: 'App client ID',
          required: true
        },
        {
          title: 'Client Secret',
          name: 'clientSecret',
          type: 'password',
          description: 'App client secret',
          required: true
        }
      ]
    },
    {
      strategy: 'microsoft',
      type: 'redirect',
      fields: [
        {
          title: 'Client ID',
          name: 'clientID',
          type: 'password',
          description: 'App client ID',
          required: true
        },
        {
          title: 'Client Secret',
          name: 'clientSecret',
          type: 'password',
          description: 'App client secret',
          required: true
        }
      ]
    },
    {
      strategy: 'basic',
      type: 'form',
      fields: [
        {
          title: 'Username',
          name: 'username',
          type: 'text',
          description: 'Username',
          required: true
        },
        {
          title: 'Password',
          name: 'password',
          type: 'password',
          description: 'Password',
          required: true
        }
      ]
    },
    {
      strategy: 'ldap',
      type: 'form',
      fields: [
        {
          title: 'Ldap url',
          name: 'url',
          type: 'url',
          description: 'Ldap url',
          required: true
        },
        {
          title: 'Ldap base',
          name: 'bindDN',
          type: 'text',
          description: 'bindDN',
          required: true
        },
        {
          title: 'Ldap password',
          name: 'bindCredentials',
          type: 'password',
          description: 'bindCredentials',
          required: true
        },
        {
          title: 'Ldap search base',
          name: 'searchBase',
          type: 'text',
          description: 'searchBase',
          required: true
        },
        {
          title: 'Ldap search filter',
          name: 'searchFilter',
          type: 'text',
          description: 'searchFilter',
          default: '(uid={{username}})',
          required: true
        }
      ]
    }
  ]
}
