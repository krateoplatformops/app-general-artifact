import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Menu from './Menu/Menu'
import Profile from './Profile/Profile'
import Endpoints from './Endpoints/Endpoints'
import Follower from '../../UI/Follower/Follower'

const Settings = () => (
  <ul className='ul-double-view mt'>
    <li className='li-menu'>
      <Follower>
        <Menu />
      </Follower>
    </li>
    <li className='li-content'>
      <Routes>
        <Route path='/*'>
          <Route index element={<Profile />} />
          <Route path='endpoints' element={<Endpoints />} />
        </Route>
      </Routes>
    </li>
  </ul>
)

export default Settings
