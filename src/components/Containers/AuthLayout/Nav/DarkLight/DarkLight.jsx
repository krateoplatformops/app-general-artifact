import React, { useContext } from 'react'

import { UserContext } from '../../../../Context/UserContext'
import css from './DarkLight.module.scss'
import { uiConstants } from '../../../../../constants/ui.constants'

const DarkLight = () => {
  const { switchTheme, theme } = useContext(UserContext)

  return (
    <div className={css.Container} onClick={switchTheme}>
      <div
        className={`${css.Sun} ${css.SunLogo} ${
          theme === uiConstants.themes.dark ? css.AnimateSun : ''
        }`}
      >
        <i className='fas fa-sun'></i>
      </div>
      <div
        className={`${css.Moon} ${css.MoonLogo} ${
          theme === uiConstants.themes.dark ? css.AnimateMoon : ''
        }`}
      >
        <i className='fas fa-moon'></i>
      </div>
    </div>
  )
}

export default DarkLight
