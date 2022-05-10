import React, { useContext } from 'react'

import { UserContext } from '../../../Context/UserContext'
import css from './Hamburger.module.scss'

const Hamburger = () => {
  const { toggleMenu } = useContext(UserContext)

  return (
    <div className={css.Container}>
      <button onClick={toggleMenu} className={css.Hamburger}>
        <i className='fa-solid fa-bars'></i>
      </button>
    </div>
  )
}

export default Hamburger
