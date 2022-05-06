import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TemplatesList from './TemplatesList/TemplatesList'
import Template from './Template/Template'
import ErrorBoundary from '../../Containers/ErrorBoundary/ErrorBoundary'

const Templates = () => {
  return (
    <Routes>
      <Route path='/'>
        <Route
          index
          element={
            <ErrorBoundary>
              <TemplatesList />
            </ErrorBoundary>
          }
        />
        <Route
          path=':id'
          element={
            <ErrorBoundary>
              <Template />
            </ErrorBoundary>
          }
        />
      </Route>
    </Routes>
  )
}

export default Templates
