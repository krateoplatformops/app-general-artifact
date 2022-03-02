import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { redirectDone } from '../../../../redux/actions'

const Navigator = (props) => {
  const nav = useNavigate()
  const dispatch = useDispatch()

  const { path } = props.redirect

  useEffect(() => {
    if (path) {
      dispatch(redirectDone())
      nav(path, { replace: true })
    }
  }, [dispatch, nav, path])

  return <React.Fragment></React.Fragment>
}

function mapStateToProps(state) {
  return state
}

export default React.memo(connect(mapStateToProps, { redirectDone })(Navigator))
