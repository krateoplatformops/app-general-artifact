import React from 'react'

import { uiConstants } from '../../../../constants/ui.constants'
import css from './Support.module.scss'

const Support = () => {
  return (
    <ul className={css.UlSupport}>
      {uiConstants.support.map((s) => (
        <li key={s.target}>
          <a
            href={s.target}
            className={css.Link}
            target='_blank'
            rel='noopener noreferrer'
          >
            {s.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Support
