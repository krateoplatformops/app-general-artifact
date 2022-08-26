import React from 'react'

import { uiConstants } from '../../../../constants/ui.constants'
import css from './Social.module.scss'

const Social = () => {
  return (
    <ul className={css.UlSocial}>
      {uiConstants.social.map((s) => (
        <li key={s.icon}>
          <a
            href={s.target}
            className={css.Link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={s.icon}></i>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Social
