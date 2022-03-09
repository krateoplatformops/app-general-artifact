import React from 'react'

import css from './SideBar.module.scss'

const SideBar = ({ closeSidebar, children, title, isOpen }) => (
  <React.Fragment>
    <div
      onClick={closeSidebar}
      className={`${css.Bkg} ${isOpen ? css.IsOpen : ''}`}
    ></div>
    <div className={`${css.SideBar} ${isOpen ? css.IsOpen : ''}`}>
      <ul className={css.Header}>
        <li>{title}</li>
        <li>
          <button onClick={closeSidebar}>
            <i className='fa-solid fa-xmark'></i>
          </button>
        </li>
      </ul>
      <div className={css.Body}>{children}</div>
    </div>
  </React.Fragment>
)

export default SideBar
