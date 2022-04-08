import React from 'react'
import { Routes, Route } from 'react-router-dom'

import DeploymentList from './DeploymentList/DeploymentList'
import Deployment from './Deployment/Deployment'

const Deployments = () => (
  <Routes>
    <Route path='/'>
      <Route index element={<DeploymentList />} />
      <Route path=':id/*' element={<Deployment />} />
    </Route>
  </Routes>
)

export default Deployments
