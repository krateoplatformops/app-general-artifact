import React, { useContext } from 'react'

import Search from './Search/Search'
import css from './TopNav.module.scss'
import Brand from './Brand/Brand'
import { UserContext } from '../../../Context/UserContext'

const TopNav = () => {
  const { toggleUser, toggleNotification } = useContext(UserContext)

  return (
    <div className={css.TopNav}>
      <Brand />
      <Search />
      <button className={css.BtnIcons} onClick={toggleNotification}>
        <i className='fa-solid fa-bell'></i>
      </button>
      <button className={css.BtnIcons} onClick={toggleUser}>
        <i className='fa-solid fa-circle-user'></i>
      </button>
    </div>
  )
}

export default TopNav
