import React from 'react'

import uris from '../../../../uris'
import css from './Oauth.module.scss'

const Oauth = ({ provider }) => {
  const faIcon = () => {
    switch (provider.provider) {
      case 'github':
        return 'fa-brands fa-github'
      case 'microsoft':
        return 'fa-brands fa-microsoft'
      case 'gitlab':
        return 'fa-brands fa-gitlab'
      default:
        return 'fa-solid fa-user-tie'
    }
  }

  return (
    <a
      href={`${uris.apiBase}${uris.auth}/${provider.provider}`}
      className={css.Link}
    >
      <i className={faIcon()}></i>
      {provider.name}
    </a>
  )
}

export default Oauth
