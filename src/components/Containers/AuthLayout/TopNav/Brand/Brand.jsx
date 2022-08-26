import React from 'react'
import { NavLink } from 'react-router-dom'

import css from './Brand.module.scss'
import KrateoLogo from '../../../../UI/KrateoLogo/KrateoLogo'

import packageJson from '../../../../../../package.json'
import { uiConstants } from '../../../../../constants'

const Brand = () => (
  <div className={css.Brand}>
    <NavLink
      to="/dashboard"
      title={`Krateo - ${packageJson.version}`}
      className={css.Link}
    >
      <KrateoLogo file={uiConstants.logo.horizontal} css={css.FullLogo} />
      <KrateoLogo css={css.Logo} />
    </NavLink>
  </div>
)

export default Brand
