import React from 'react'

import css from './PageLoader.module.scss'
import KrateoLogo from '../KrateoLogo/KrateoLogo'

const PageLoader = () => (
  <div className={css.LoaderBkg}>
    <div className={css.Loader}></div>
    <KrateoLogo css={css.Logo} />
  </div>
)

export default PageLoader
