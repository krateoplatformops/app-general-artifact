import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ErrorBoundary from '../../Containers/ErrorBoundary/ErrorBoundary'
import AddPackage from './AddPackage/AddPackage'
import PackagesList from './PackagesList/PackagesList'

const Packages = () => {
  return (
    <Routes>
      <Route path='/'>
        <Route
          index
          element={
            <ErrorBoundary>
              <PackagesList />
            </ErrorBoundary>
          }
        />
        <Route
          path='/new'
          element={
            <ErrorBoundary>
              <AddPackage />
            </ErrorBoundary>
          }
        />
      </Route>
    </Routes>
  )
}

export default Packages
