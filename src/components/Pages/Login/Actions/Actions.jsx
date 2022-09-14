import React from 'react'
import { Link } from 'react-router-dom'

import uris from '../../../../uris'
import css from './Actions.module.scss'

const Actions = ({ provider }) => {
  const href = () => {
    if (provider.spec.type === 'redirect') {
      return `${uris.apiBase}${uris.auth}/${provider.spec.strategy}?name=${provider.metadata.name}&redirect=${window.location.href}dashboard`
    }
    return `auth/${provider.spec.strategy}/${provider.metadata.name}`
  }

  const content = () => {
    return (
      <ul>
        <li>
          <i className={provider.spec.icon}></i>
        </li>
        <li>{provider.spec.name}</li>
      </ul>
    )
  }

  return provider.spec.type === 'redirect' ? (
    <a href={href()} className={`${css.Link} ${css[provider.spec.color]}`}>
      {content()}
    </a>
  ) : (
    <Link to={href()} className={`${css.Link} ${css[provider.spec.color]}`}>
      {content()}
    </Link>
  )
}

export default Actions
