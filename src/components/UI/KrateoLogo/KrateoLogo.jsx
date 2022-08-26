import { useContext } from 'react'

import { UserContext } from '../../Context/UserContext'
import { uiConstants } from '../../../constants'

const KrateoLogo = ({ file, alt, css }) => {
  const ctx = useContext(UserContext)

  const image = () => {
    switch (file) {
      case uiConstants.logo.horizontal:
        return 'logo_horizontal.svg'
      case uiConstants.logo.vertical:
        return 'logo_vertical.svg'
      default:
        return 'icon.svg'
    }
  }

  const icon = require(`../../../assets/krateo/${
    ctx?.theme || uiConstants.themes.light
  }/${image()}`)

  return <img src={icon} alt={alt || 'Krateo PlatformOps'} className={css} />
}

export default KrateoLogo
