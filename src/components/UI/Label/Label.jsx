import React from 'react'

import css from './Label.module.scss'

const Label = ({ title, description, children }) => (
  <label className={css.Label}>
    <span className={css.Title}>{title}</span>
    {children}
    {description && <span className={css.Description}>{description}</span>}
  </label>
)

export default Label
