import React, { useEffect } from 'react'

import css from './NotFound.module.scss'
import KrateoLogo from '../../UI/KrateoLogo/KrateoLogo'

const NotFound = ({ history }) => {
  useEffect(() => {
    const timeoutID = window.setTimeout(() => {
      history.back()
    }, 3000)

    return () => window.clearTimeout(timeoutID)
  }, [history])

  return (
    <div className={css.NotFound}>
      <KrateoLogo alt='Not Found' />
      <p className={css.Title}>Not Found</p>
    </div>
  )
}
export default NotFound
