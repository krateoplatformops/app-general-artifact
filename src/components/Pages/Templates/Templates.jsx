import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TemplatesList from './TemplatesList/TemplatesList'
import Template from './Template/Template'

const Templates = () => {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<TemplatesList />} />
        <Route path=':id' element={<Template />} />
      </Route>
    </Routes>
  )
}

export default Templates
