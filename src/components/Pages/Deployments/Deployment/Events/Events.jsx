import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'

import { logFetch, logDeleteKey } from '../../../../../redux/actions'
import Log from './Log/Log'
import LocalSearch from '../../../../UI/LocalSearch/LocalSearch'

const Events = ({ deploy, log }) => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')

  useEffect(() => {
    dispatch(
      logFetch({ key: deploy._id, params: { deploymentId: deploy._id } })
    )
    return () => {
      logDeleteKey({ key: deploy._id })
    }
  }, [deploy._id, dispatch])

  return (
    <React.Fragment>
      <LocalSearch>
        <input
          type='text'
          placeholder='Search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </LocalSearch>

      {(log.data[deploy._id] || [])
        .filter((x) => {
          return (
            x.message.toLowerCase().indexOf(search) > -1 ||
            x.source.toLowerCase().indexOf(search) > -1 ||
            x.reason.toLowerCase().indexOf(search) > -1
          )
        })
        .sort((a, b) => b.time - a.time)
        .map((log, key) => (
          <Log key={key} log={log} />
        ))}
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Events)
