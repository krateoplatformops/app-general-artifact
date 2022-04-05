import React from 'react'

import css from './LoadingBusiness.module.scss'

const LoadingBusiness = ({ message }) => (
  <div className={css.Container}>
    <div className={css.Loader}></div>
    <span className={css.Message}>{message ? message : 'Loading...'}</span>
  </div>
)

export default LoadingBusiness
