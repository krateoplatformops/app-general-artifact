import React, { useCallback, useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'

import { pluginFetch, pluginDeleteKey } from '../../../../../redux/actions'
import Error from '../../../../UI/Error/Error'
import ArgoCD from './ArgoCD/ArgoCD'
import Documentation from './Documentation/Documentation'
import Loader from '../../../../UI/Loader/Loader'
import Pipelines from './Pipelines/Pipelines'
import Kubernetes from './Kubernetes/Kubernetes'
import Keptn from './Keptn/Keptn'
import Codequality from './Codequality/Codequality'
import Capi from './Capi/Capi'
import ErrorBoundary from '../../../../Containers/ErrorBoundary/ErrorBoundary'
import { pluginHelper } from '../../../../../helpers'

const CatchAll = ({ deploy, params, plugin }) => {
  const dispatch = useDispatch()
  const [detailsKey, setDetailsKey] = useState('')

  const pp = deploy.claim.spec.dashboard.plugins.find(
    (x) => x.name.replace(/\s/g, '-') === params['*']
  )

  const pKey = pp ? `${pp.type}-${pp.name}` : null

  const detailsCallHandler = useCallback(
    ({ url, key, method, data, message }) => {
      if (key) {
        setDetailsKey(key)
      }
      dispatch(
        pluginFetch({
          method: method || 'get',
          url,
          data,
          key,
          message
        })
      )
    },
    [dispatch]
  )

  const detailsClearHandler = () => {
    dispatch(pluginDeleteKey({ key: detailsKey }))
    setDetailsKey('')
  }

  useEffect(() => {
    pKey &&
      !plugin.data[pKey] &&
      dispatch(
        pluginFetch({
          url: pluginHelper.createCallUrl(deploy, pp),
          key: pKey
        })
      )
  }, [deploy, dispatch, pKey, plugin.data, pp])

  useEffect(() => {
    return () =>
      pKey &&
      dispatch(
        pluginDeleteKey({
          key: pKey
        })
      )
  }, [dispatch, pKey])

  if (!pKey) {
    return <Error message='Plugin not found' />
  }

  if (
    (!plugin.data[pKey] && plugin.loading) ||
    (!plugin.data[pKey] && !plugin.loading && !plugin.error)
  ) {
    return <Loader />
  }

  if (!plugin.data[pKey]) {
    return <Error message={plugin?.error?.response?.data?.message} />
  }

  const mountPlugin = () => {
    switch (pp.type) {
      case 'doc':
        return <Documentation plugin={pp} content={plugin.data[pKey]} />
      case 'pipeline':
        return <Pipelines plugin={pp} content={plugin.data[pKey]} />
      case 'argocd':
        return (
          <ArgoCD
            plugin={pp}
            deploy={deploy}
            content={plugin.data[pKey]}
            detailsCallHandler={detailsCallHandler}
            detailsContent={plugin.data[detailsKey]}
            detailsClearHandler={detailsClearHandler}
          />
        )
      case 'kubernetes':
        return (
          <Kubernetes plugin={pp} deploy={deploy} content={plugin.data[pKey]} />
        )
      case 'keptn':
        return (
          <Keptn
            plugin={pp}
            deploy={deploy}
            content={plugin.data[pKey]}
            detailsCallHandler={detailsCallHandler}
          />
        )
      case 'codequality':
        return (
          <Codequality
            plugin={pp}
            deploy={deploy}
            content={plugin.data[pKey]}
          />
        )
      case 'capi':
        return <Capi content={plugin.data[pKey]} deploy={deploy} />
      default:
        return <Error message={`Unsupported plugin type: ${pp.type}`} />
    }
  }

  return <ErrorBoundary>{mountPlugin()}</ErrorBoundary>
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(CatchAll)
