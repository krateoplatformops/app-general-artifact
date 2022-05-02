import React, { Fragment, useContext } from 'react'
import { Outlet } from 'react-router'

import Nav from './Nav/Nav'

import css from './AuthLayout.module.scss'
import Hamburger from './Hamburger/Hamburger'
import TopNav from './TopNav/TopNav'
import { UserContext } from '../../Context/UserContext'
import NotificationBar from './NotificationBar/NotificationBar'
import LoadComponents from './LoadComponents/LoadComponents'

const AuthLayout = () => {
  const { menuOpen } = useContext(UserContext)

  return (
    <Fragment>
      <Hamburger />
      <TopNav />
      <Nav />
      <NotificationBar />
      <div className={`${css.MainContainer} ${menuOpen && css.IsOpen}`}>
        <Outlet />
      </div>
      <LoadComponents />
    </Fragment>
  )
}

export default AuthLayout
