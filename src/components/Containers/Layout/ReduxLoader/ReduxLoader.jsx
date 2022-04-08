import React from 'react'
import { connect } from 'react-redux'

import PageLoader from '../../../UI/PageLoader/PageLoader'

const ReduxLoader = (props) => {
  return props.user.loading ||
    props.register.loading ||
    props.config.loading ||
    props.deployment.loading ||
    props.template.loading ? (
    <PageLoader />
  ) : (
    <React.Fragment />
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(ReduxLoader)
