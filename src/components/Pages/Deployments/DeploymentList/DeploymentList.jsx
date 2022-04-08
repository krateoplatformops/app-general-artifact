import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'

import LocalSearch from '../../../UI/LocalSearch/LocalSearch'
import DeploymentSkeleton from './DeploymentSkeleton/DeploymentSkeleton'

import { deploymentLoad } from '../../../../redux/actions'

const DeploymentList = ({ deployment }) => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')

  const reloadDeployments = () => {
    dispatch(deploymentLoad())
  }

  return (
    <React.Fragment>
      <h1>Deployments</h1>
      <LocalSearch
        buttons={[
          // {
          //   action: changeViewMode,
          //   icon: cardMode ? 'fa-solid fa-grip' : 'fa-solid fa-bars'
          // },
          { action: reloadDeployments, icon: 'fa-solid fa-rotate' }
        ]}
      >
        <input
          type='text'
          placeholder='Search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </LocalSearch>

      {deployment.skeletonLoading && <DeploymentSkeleton />}

      {(deployment.list || []).map((x) => (
        <Link to={`${x._id}`} key={x._id}>
          {x.payload.name}
        </Link>
      ))}
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(DeploymentList)
