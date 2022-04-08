import React from 'react'

import css from './Error.module.scss'
import NotFound from '../../../assets/not-found.svg'

const Error = ({ message }) => (
  <div className={css.Container}>
    <img src={NotFound} alt='not found' />
    {message ? message : 'Error'}
  </div>
)

export default Error
