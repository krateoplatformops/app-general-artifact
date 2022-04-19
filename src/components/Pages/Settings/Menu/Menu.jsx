import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

import css from './Menu.module.scss'
import { uiConstants } from '../../../../constants'
import Card from '../../../UI/Card/Card'

const Menu = () => {
  const params = useParams()

  return (
    <Card title={'Settings'}>
      <ul className={css.UlMenu}>
        {uiConstants.settingsNav.map((l) => {
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
    </Card>
  )
}

export default Menu
