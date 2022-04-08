import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

import { templateLoad, deploymentLoad } from '../../../../redux/actions'

const LoadComponents = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (!props.template.result && !props.template.loading) {
      dispatch(templateLoad())
    }
  }, [dispatch, props.template])

  useEffect(() => {
    if (!props.deployment.result && !props.deployment.loading) {
      dispatch(deploymentLoad())
    }
  }, [dispatch, props.deployment])

  return <React.Fragment />
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(LoadComponents)
