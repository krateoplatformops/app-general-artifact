import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

import { templateLoad } from '../../../../redux/actions'

const LoadComponents = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (!props.template.result && !props.template.loading) {
      dispatch(templateLoad())
    }
  }, [dispatch, props.template])

  return <React.Fragment />
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(LoadComponents)
