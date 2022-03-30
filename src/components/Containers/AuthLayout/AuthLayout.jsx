import React, { Fragment, useContext } from 'react'
import { connect } from 'react-redux'

import Nav from './Nav/Nav'

import css from './AuthLayout.module.scss'
import Brand from './Brand/Brand'
import TopNav from './TopNav/TopNav'
import { UserContext } from '../../Context/UserContext'
import { Outlet } from 'react-router'

import PageLoader from '../../UI/PageLoader/PageLoader'

const AuthLayout = (props) => {
  const { isOpen } = useContext(UserContext)

  return (
    <Fragment>
      <Brand isOpen={isOpen} />
      <TopNav />
      <Nav />
      <div className={`${css.MainContainer} ${isOpen && css.IsOpen}`}>
        <Outlet />
      </div>
      {props.register.loading && <PageLoader />}
    </Fragment>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(AuthLayout)
