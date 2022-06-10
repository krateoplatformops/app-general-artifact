import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { userLoadProfile, redirect } from '../../../../redux/actions'

const CheckUser = (props) => {
  const dispatch = useDispatch()
  let location = useLocation()

  useEffect(() => {
    if (!props.user.init) {
      dispatch(userLoadProfile())
    }
  }, [dispatch, props.user.init])

  useEffect(() => {
    if (
      props.user.profile &&
      (location.pathname === '/' || location.pathname.startsWith('/auth'))
    ) {
      dispatch(redirect('/dashboard'))
    }
  }, [dispatch, location.pathname, props.user.profile])

  return <React.Fragment />
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { userLoadProfile })(CheckUser)
