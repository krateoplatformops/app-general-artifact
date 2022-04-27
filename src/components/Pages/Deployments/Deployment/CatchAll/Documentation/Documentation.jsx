import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import { proxyFetch, proxyDeleteKey } from '../../../../../../redux/actions'
import uris from '../../../../../../uris'
import Card from '../../../../../UI/Card/Card'
import Loader from '../../../../../UI/Loader/Loader'

const Documentation = ({ plugin, deploy, proxy }) => {
  const dispatch = useDispatch()

  const pKey = `${plugin.type}-${plugin.name}`

  useEffect(() => {
    let url = `${uris.apiBase}${uris.deployment}/${deploy._id}/plugins/${plugin.type}/${plugin.name}`
    dispatch(
      proxyFetch({
        url,
        key: pKey
      })
    )
    return () =>
      dispatch(
        proxyDeleteKey({
          key: pKey
        })
      )
  }, [deploy._id, dispatch, pKey, plugin])

  if (!proxy.data[pKey]) {
    return <Loader />
  }

  return (
    <React.Fragment>
      <Card title={plugin.value}>
        <div className='markdown-body'>
          <ReactMarkdown remarkPlugins={[gfm]}>
            {proxy.data[pKey].content}
          </ReactMarkdown>
        </div>
      </Card>
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Documentation)
