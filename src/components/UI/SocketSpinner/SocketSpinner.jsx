import React from 'react'

import css from './SocketSpinner.module.scss'

const SocketSpinner = () => (
  <span className={css.Loader} title={'Live streaming active'}></span>
)

export default SocketSpinner
