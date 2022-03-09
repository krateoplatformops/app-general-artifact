import React, { useContext } from 'react'

import { UserContext } from '../../../Context/UserContext'
import Search from './Search/Search'
import Notification from './Notification/Notification'
import User from './User/User'
import css from './TopNav.module.scss'

const TopNav = () => {
  const { isOpen, toggle } = useContext(UserContext)

  return (
    <div className={`${css.TopNav} ${isOpen && css.IsOpen}`}>
      <button onClick={toggle}>
        <i className='fa-solid fa-bars'></i>
      </button>
      <Search />
      <Notification />
      <User />
    </div>
  )
}

export default TopNav
