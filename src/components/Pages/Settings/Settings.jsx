import React from 'react'
import { Routes, Route } from 'react-router-dom'

import css from './Settings.module.scss'
import Menu from './Menu/Menu'
import Profile from './Profile/Profile'
import Endpoints from './Endpoints/Endpoints'
// import Proxy from './Proxy/Proxy'

const Settings = () => (
  <ul className={css.UlSettings}>
    <li className={css.LiMenu}>
      <Menu />
    </li>
    <li className={css.LiContent}>
      <Routes>
        <Route path='/*'>
          <Route index element={<Profile />} />
          <Route path='endpoints' element={<Endpoints />} />
          {/* <Route path='proxy' element={<Proxy />} /> */}
        </Route>
      </Routes>
    </li>
  </ul>
)

export default Settings
