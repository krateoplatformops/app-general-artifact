import React from 'react'

import css from './Loader.module.scss'
import KrateoLogo from '../KrateoLogo/KrateoLogo'

const Loader = () => (
  <div className={css.Container}>
    <KrateoLogo css={css.Logo} />
    <div className={css.Loader}></div>
  </div>
)

export default Loader
