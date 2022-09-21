import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

import { uiConstants } from '../../../../../constants/ui.constants'
import css from './Menu.module.scss'

const Menu = ({ deploy }) => {
  const params = useParams()

  const mergedMenu = () => {
    const menu = [...uiConstants.deploymentNav]

    deploy.spec.plugins.forEach((x) => {
      if (!menu.find((m) => m.to === x.name)) {
        menu.push({
          to: x.name,
          label: x.name,
          icon: x.icon,
          weight: 2
        })
      }
    })

    return menu.sort((a, b) => {
      return a.weight - b.weight
    })
  }

  return (
    <ul className={css.UlMenu}>
      {mergedMenu().map((l) => {
        const to = l.to.replace(/\s/g, '-')
        return (
          <li key={l.label}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive && params['*'] === to ? css.LinkActive : css.Link
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
