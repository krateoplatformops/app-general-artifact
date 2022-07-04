import React from 'react'
import { useDispatch } from 'react-redux'

import css from './CopyClipboard.module.scss'
import { addNotification } from '../../../redux/actions'
import { uiConstants } from '../../../constants'

const CopyClipboard = ({ text, customClass, children }) => {
  let dispatch = useDispatch()

  const btnHandler = () => {
    navigator.clipboard.writeText(text)
    dispatch(
      addNotification(
        uiConstants.messages.copied,
        uiConstants.notification.info
      )
    )
  }

  if (customClass)
    return (
      <button className={customClass} onClick={btnHandler}>
        {children}
      </button>
    )

  return (
    <button className={`${!children ? css.Btn : ''}`} onClick={btnHandler}>
      {children}
      {!children && <i className='fa-solid fa-clipboard'></i>}
    </button>
  )
}

export default CopyClipboard
