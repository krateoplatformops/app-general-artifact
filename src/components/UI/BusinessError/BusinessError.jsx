import React from 'react'

import css from './BusinessError.module.scss'

const BusinessError = ({ message }) => (
  <div className={css.Container}>
    <i className='fa-solid fa-triangle-exclamation'></i>
    {message ? message : 'Error'}
  </div>
)

export default BusinessError
