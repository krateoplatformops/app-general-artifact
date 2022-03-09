import React from 'react'
import { NavLink } from 'react-router-dom'

import css from './Brand.module.scss'
import KrateoLogo from '../../../UI/KrateoLogo/KrateoLogo'

import packageJson from '../../../../../package.json'
import { uiConstants } from '../../../../constants'

const Brand = ({ isOpen }) => (
  <div className={css.Brand}>
    {/* <li className={css.LiIcon}> */}
    <NavLink
      to='/dashboard'
      title={`Krateo - ${packageJson.version}`}
      className={`${css.Link} ${!isOpen && css.Closed}`}
    >
      {isOpen ? (
        <KrateoLogo file={uiConstants.logo.horizontal} />
      ) : (
        <KrateoLogo />
      )}
    </NavLink>
    {/* </li> */}

    {/* <li className={css.LiPipem}><img src={Pipem} alt='pipem.io' /></li> */}
  </div>
)

export default Brand
