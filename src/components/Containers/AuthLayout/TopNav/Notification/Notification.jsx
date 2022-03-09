import React from 'react'

import css from './Notification.module.scss'

const Notification = () => {
  return (
    <button className={css.Bell}>
      <i className='fa-solid fa-bell'></i>
    </button>
  )
}

export default Notification
