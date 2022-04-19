import React from 'react'
import { Routes, Route } from 'react-router-dom'

import css from './Settings.module.scss'
import Menu from './Menu/Menu'
import Profile from './Profile/Profile'
import Hosts from './Hosts/Hosts'

const Settings = () => (
  <ul className={css.UlSettings}>
    <li className={css.LiMenu}>
      <Menu />
    </li>
    <li className={css.LiContent}>
      <Routes>
        <Route path='/*'>
          <Route index element={<Profile />} />
          <Route path='hosts' element={<Hosts />} />
        </Route>
      </Routes>
    </li>
  </ul>
)

export default Settings
