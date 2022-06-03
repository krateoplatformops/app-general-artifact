import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

import {
  templateLoad,
  deploymentLoad,
  endpointLoad,
  dashboardLoad,
  pkgLoad,
  socketInit,
  secretLoad,
  catalogLoad
} from '../../../../redux/actions'

const LoadComponents = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (!props.socket.init) {
      dispatch(socketInit())
    }
  }, [dispatch, props.socket.init])

  useEffect(() => {
    if (
      !props.template.result &&
      !props.template.skeletonLoading &&
      props.user.profile
    ) {
      dispatch(templateLoad())
    }
  }, [dispatch, props.template, props.user.profile])

  useEffect(() => {
    if (
      !props.deployment.result &&
      !props.deployment.skeletonLoading &&
      props.user.profile
    ) {
      dispatch(deploymentLoad())
    }
  }, [dispatch, props.deployment, props.user.profile])

  useEffect(() => {
    if (
      !props.endpoint.result &&
      !props.endpoint.skeletonLoading &&
      props.user.profile
    ) {
      dispatch(endpointLoad())
    }
  }, [dispatch, props.endpoint, props.user.profile])

  useEffect(() => {
    if (
      !props.dashboard.result &&
      !props.dashboard.loading &&
      props.user.profile
    ) {
      dispatch(dashboardLoad())
    }
  }, [dispatch, props.dashboard, props.user.profile])

  useEffect(() => {
    if (!props.pkg.result && !props.pkg.skeletonLoading && props.user.profile) {
      dispatch(pkgLoad())
    }
  }, [dispatch, props.pkg, props.user.profile])

  useEffect(() => {
    if (
      !props.secret.result &&
      !props.secret.skeletonLoading &&
      props.user.profile
    ) {
      dispatch(secretLoad())
    }
  }, [dispatch, props.secret, props.user.profile])

  useEffect(() => {
    if (!props.catalog.result && !props.catalog.loading && props.user.profile) {
      dispatch(catalogLoad())
    }
  }, [dispatch, props.catalog, props.user.profile])

  return <React.Fragment />
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(LoadComponents)
