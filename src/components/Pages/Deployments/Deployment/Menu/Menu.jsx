import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

import { uiConstants } from '../../../../../constants/ui.constants'
import css from './Menu.module.scss'

const Menu = () => {
  const params = useParams()

  return (
    <ul className={css.UlMenu}>
      {uiConstants.deploymentNav.map((l) => {
        return (
          <li key={l.label}>
            <NavLink
              to={l.to}
              className={({ isActive }) =>
                isActive && params['*'] === l.to ? css.LinkActive : css.Link
              }
            >
              <i className={l.icon}></i>
              {l.label}
            </NavLink>
          </li>
        )
      })}
    </ul>
  )
}

export default Menu
