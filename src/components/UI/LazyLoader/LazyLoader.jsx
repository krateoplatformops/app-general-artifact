import React from 'react'

import css from './LazyLoader.module.scss'

const LazyLoader = () => (
  <React.Fragment>
    <div className={css.LazyLoader}></div>
    {/* <div className={css.LazyLoaderBkg}></div> */}
  </React.Fragment>
)

export default LazyLoader
