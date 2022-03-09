import React, { Fragment, useContext, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

import Nav from './Nav/Nav'

import css from './AuthLayout.module.scss'
import Brand from './Brand/Brand'
import TopNav from './TopNav/TopNav'
import { UserContext } from '../../Context/UserContext'
import { Outlet } from 'react-router'

import { userLoadProfile } from '../../../redux/actions'
import PageLoader from '../../UI/PageLoader/PageLoader'

const AuthLayout = (props) => {
  const { isOpen } = useContext(UserContext)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!props.user.profile) {
      dispatch(userLoadProfile())
    }
  }, [dispatch, props.user.profile])

  return (
    <Fragment>
      <Brand isOpen={isOpen} />
      <TopNav />
      <Nav />
      <div className={`${css.MainContainer} ${isOpen && css.IsOpen}`}>
        <Outlet />
      </div>
      {props.user.loading && <PageLoader />}
    </Fragment>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(AuthLayout)
