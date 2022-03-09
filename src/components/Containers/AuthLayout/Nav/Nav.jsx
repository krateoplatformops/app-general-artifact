import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { uiConstants } from '../../../../constants'
import css from './Nav.module.scss'
import { UserContext } from '../../../Context/UserContext'

const Nav = ({ logoutHandler, profile }) => {
  const { isOpen, toggle } = useContext(UserContext)

  const beCollapsed = () => {
    if (window.innerWidth < 768) {
      toggle()
    }
  }

  return (
    <div className={`${css.NavContainer} ${isOpen && css.IsOpen}`}>
      <ul className={css.UlNav}>
        {uiConstants.nav
          .filter(
            (x) => (profile?.role === 'admin' && x.onlyAdmin) || !x.onlyAdmin
          )
          .map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  isActive ? css.NavLnkActive : css.NavLnk
                }
                onClick={beCollapsed}
              >
                <i className={l.icon}></i> {l.label}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Nav
