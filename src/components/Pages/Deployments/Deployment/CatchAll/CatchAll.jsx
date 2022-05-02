import React, { useCallback, useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'

import { pluginFetch, pluginDeleteKey } from '../../../../../redux/actions'
import uris from '../../../../../uris'
import Error from '../../../../UI/Error/Error'
import ArgoCD from './ArgoCD/ArgoCD'
import Documentation from './Documentation/Documentation'
import Loader from '../../../../UI/Loader/Loader'
import Pipelines from './Pipelines/Pipelines'

const CatchAll = ({ deploy, params, plugin }) => {
  const dispatch = useDispatch()
  const [detailsKey, setDetailsKey] = useState('')

  const pp = deploy.claim.spec.dashboard.plugins.find(
    (x) => x.name.replace(/\s/g, '-') === params['*']
  )

  const pKey = `${pp.type}-${pp.name}`

  const detailsCallHandler = useCallback(
    ({ url, key }) => {
      setDetailsKey(key)
      dispatch(
        pluginFetch({
          url,
          key
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
    let url = `${uris.apiBase}${uris.deployment}/${deploy._id}/plugins/${pp.type}/${pp.name}`
    dispatch(
      pluginFetch({
        url,
        key: pKey
      })
    )
    return () =>
      dispatch(
        pluginDeleteKey({
          key: pKey
        })
      )
  }, [deploy._id, dispatch, pKey, pp])

  if (!plugin.data[pKey]) {
    return <Loader />
  }

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
    default:
      return <Error message={`Unsupported pp type: ${pp.type}`} />
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(CatchAll)
