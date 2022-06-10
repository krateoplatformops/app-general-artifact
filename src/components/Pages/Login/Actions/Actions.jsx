import React from 'react'
import { Link } from 'react-router-dom'

import { strategiesConstants } from '../../../../constants'
import uris from '../../../../uris'
import css from './Actions.module.scss'

const Actions = ({ provider }) => {
  const s =
    strategiesConstants.list.find((x) => x.type === provider.strategy) ||
    strategiesConstants.guest

  const href = () => {
    if (provider.strategy !== 'ldap') {
      return `${uris.apiBase}${uris.auth}/${provider.strategy}?id=${provider._id}`
    }
    return `auth/${provider.strategy}/${provider._id}`
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

  return provider.strategy !== 'ldap' ? (
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
