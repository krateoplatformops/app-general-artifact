import React, { useEffect } from 'react'

import css from './NotFound.module.scss'
import Doll from '../../../assets/krateo/black_icon.svg'

const NotFound = ({ history }) => {
  // useEffect(() => {
  //   const timeoutID = window.setTimeout(() => {
  //     history.back()
  //   }, 3000)

  //   return () => window.clearTimeout(timeoutID)
  // }, [history])

  return (
    <div className={css.NotFound}>
      <img src={Doll} alt='Not found' />
      <p className={css.Title}>Not Found</p>
    </div>
  )
}
export default NotFound
