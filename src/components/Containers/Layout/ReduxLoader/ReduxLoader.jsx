import React from 'react'
import { connect } from 'react-redux'

import PageLoader from '../../../UI/PageLoader/PageLoader'

const ReduxLoader = (props) => {
  return props.auth.loading ||
    props.user.loading ||
    props.register.loading ||
    props.config.loading ||
    props.deployment.loading ||
    props.template.loading ||
    props.proxy.loading ||
    props.plugin.loading ||
    props.endpoint.loading ||
    props.secret.loading ||
    props.catalog.loading ||
    props.log.loading ||
    props.pkg.loading ||
    props.dashboard.loading ? (
    <PageLoader />
  ) : (
    <React.Fragment />
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(ReduxLoader)
