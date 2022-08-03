import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

import { strategyLoad } from '../../../../redux/actions'

const LoadComponents = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (!props.strategy.result && !props.strategy.loading) {
      dispatch(strategyLoad())
    }
  }, [dispatch, props.strategy.loading, props.strategy.result])

  return <React.Fragment />
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(LoadComponents)
