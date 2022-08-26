import React from 'react'
import { Routes, Route } from 'react-router-dom'

import DeploymentList from './DeploymentList/DeploymentList'
import Deployment from './Deployment/Deployment'
import ErrorBoundary from '../../Containers/ErrorBoundary/ErrorBoundary'

const Deployments = () => (
  <Routes>
    <Route path="/">
      <Route
        index
        element={
          <ErrorBoundary>
            <DeploymentList />
          </ErrorBoundary>
        }
      />
      <Route
        path=":id/*"
        element={
          <ErrorBoundary>
            <Deployment />
          </ErrorBoundary>
        }
      />
    </Route>
  </Routes>
)

export default Deployments
