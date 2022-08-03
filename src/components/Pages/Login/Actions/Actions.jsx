import React from 'react'
import { Link } from 'react-router-dom'

import { strategyUIConstants } from '../../../../constants'
import uris from '../../../../uris'
import css from './Actions.module.scss'

const Actions = ({ provider }) => {
  const s =
    strategyUIConstants.types.find((x) => x.strategy === provider.strategy) ||
    strategyUIConstants.types.find((x) => x.strategy === 'guest')

  const href = () => {
    if (provider.type === 'redirect') {
      return `${uris.apiBase}${uris.auth}/${provider.strategy}?id=${provider.metadata.uid}&redirect=${window.location.href}dashboard`
    }
    return `auth/${provider.strategy}/${provider.metadata.uid}`
  }

  const content = () => {
    return (
      <ul>
        <li>
          <i className={s.icon}></i>
        </li>
        <li>{provider.name}</li>
      </ul>
    )
  }

  return provider.type === 'redirect' ? (
    <a href={href()} className={`${css.Link} ${css[s.style]}`}>
      {content()}
    </a>
  ) : (
    <Link to={href()} className={`${css.Link} ${css[s.style]}`}>
      {content()}
    </Link>
  )
}

export default Actions
