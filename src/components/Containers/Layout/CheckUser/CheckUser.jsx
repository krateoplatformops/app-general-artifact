import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import PageLoader from '../../../UI/PageLoader/PageLoader'
import { userLoadProfile, redirect } from '../../../../redux/actions'

const CheckUser = (props) => {
  const dispatch = useDispatch()
  let location = useLocation()

  useEffect(() => {
    if (!props.user.profile) {
      dispatch(userLoadProfile())
    }
  }, [dispatch, props.user.profile])

  useEffect(() => {
    if (props.user.profile && location.pathname === '/') {
      dispatch(redirect('/dashboard'))
    }
  }, [dispatch, location.pathname, props.user.profile])

  return props.user.loading ? <PageLoader /> : <React.Fragment />
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { userLoadProfile })(CheckUser)
