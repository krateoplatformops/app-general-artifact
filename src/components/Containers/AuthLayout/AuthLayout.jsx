import React, { Fragment, useContext } from 'react'
import { connect } from 'react-redux'
import { Outlet } from 'react-router'

import Nav from './Nav/Nav'

import css from './AuthLayout.module.scss'
import Hamburger from './Hamburger/Hamburger'
import TopNav from './TopNav/TopNav'
import { UserContext } from '../../Context/UserContext'
import NotificationBar from './NotificationBar/NotificationBar'
import LoadComponents from './LoadComponents/LoadComponents'

const AuthLayout = (props) => {
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

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(AuthLayout)
