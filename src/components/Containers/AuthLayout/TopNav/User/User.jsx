import React, { useState } from 'react'

import css from './User.module.scss'
import Menu from './Menu/Menu'

const User = () => {
  const [menu, setMenu] = useState(false)

  const closeMenuHandler = () => {
    setMenu(false)
  }

  return (
    <React.Fragment>
      <button className={css.User} onClick={() => setMenu(!menu)}>
        <i className='fa-solid fa-circle-user'></i>
      </button>
      <Menu closeMenuHandler={closeMenuHandler} isOpen={menu} />
    </React.Fragment>
  )
}

export default User
