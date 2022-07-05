import React from 'react'

import css from './Label.module.scss'

const Label = ({ title, description, children, required, error }) => (
  <div className={css.Label}>
    <span className={css.Title}>
      {title} {required && '(*)'}{' '}
      {error && <i className='fa-solid fa-triangle-exclamation'></i>}
    </span>
    {children}
    {description && <span className={css.Description}>{description}</span>}
  </div>
)

export default Label
