import React from 'react'

import css from './Error.module.scss'

const Error = ({ message }) => (
  <div className={css.ErrorContainer}>
    <div className={css.Oops}>Oops!</div>
    <span>{message ? message : 'Error'}</span>
  </div>
)

export default Error
