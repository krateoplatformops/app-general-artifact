import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'

import LocalSearch from '../../../UI/LocalSearch/LocalSearch'
import DeploymentSkeleton from './DeploymentSkeleton/DeploymentSkeleton'

import { deploymentLoad } from '../../../../redux/actions'
import DeploymentCard from './DeploymentCard/DeploymentCard'

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
          {
            action: reloadDeployments,
            icon: `fa-solid fa-rotate ${
              deployment.skeletonLoading && 'fa-spin'
            }`
          }
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

      {(deployment.list || [])
        .filter((x) => {
          return (
            x.claim.spec.name.toLowerCase().indexOf(search) > -1 ||
            x.claim.spec.dashboard.description.toLowerCase().indexOf(search) >
              -1 ||
            x.claim.spec.dashboard.tags.some(
              (tag) => tag.toLowerCase().indexOf(search) > -1
            )
          )
        })
        .map((d) => (
          <DeploymentCard key={d._id} d={d} />
        ))}
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(DeploymentList)
