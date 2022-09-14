import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'

import LocalSearch from '../../../UI/LocalSearch/LocalSearch'

import { deploymentLoad } from '../../../../redux/actions'
import DeploymentCard from './DeploymentCard/DeploymentCard'
import css from './DeploymentList.module.scss'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

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
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </LocalSearch>

      <ul className={css.UlCards}>
        {deployment.skeletonLoading
          ? [...Array(4)].map((s, key) => (
              <li key={key}>
                <Skeleton height={115} />
              </li>
            ))
          : (deployment.list || [])
              .filter((x) => {
                return JSON.stringify(x).toLowerCase().indexOf(search) > -1
              })
              .map((d) => (
                <li key={d.metadata.uid}>
                  <DeploymentCard d={d} />
                </li>
              ))}
      </ul>
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(DeploymentList)
