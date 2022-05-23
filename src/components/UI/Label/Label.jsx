import React from 'react'

import css from './Label.module.scss'

const Label = ({ title, description, children, required }) => (
  <div className={css.Label}>
    <span className={css.Title}>
      {title} {required && '(*)'}
    </span>
    {children}
    {description && <span className={css.Description}>{description}</span>}
  </div>
)

export default Label
