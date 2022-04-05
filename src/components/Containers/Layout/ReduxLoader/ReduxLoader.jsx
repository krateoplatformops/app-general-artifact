import React from 'react'
import { connect } from 'react-redux'

import PageLoader from '../../../UI/PageLoader/PageLoader'

const ReduxLoader = (props) => {
  return props.user.loading ||
    props.register.loading ||
    props.config.loading ||
    props.template.ajaxLoading ? (
    <PageLoader />
  ) : (
    <React.Fragment />
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(ReduxLoader)
