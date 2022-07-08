import React from 'react'
import { useDispatch } from 'react-redux'

import { redirect, socketEventRemove } from '../../../../../redux/actions'
import { timeHelper } from '../../../../../helpers'
import css from './EventCard.module.scss'
import { uiConstants } from '../../../../../constants'

const EventCard = ({ e, closeNotificationHandler }) => {
  let dispatch = useDispatch()

  const removeEventHandler = (event) => {
    event.stopPropagation()
    dispatch(socketEventRemove(e.id))
  }

  const icon = () => {
    if (e.deploymentId) {
      return uiConstants.nav.find((x) => x.to === 'deployments').icon
    }
    if (e.templateId) {
      return uiConstants.nav.find((x) => x.to === 'templates').icon
    }
    return 'fa-solid fa-comment'
  }

  const color = () => {
    switch (e.level) {
      case 'error':
        return css.Error
      case 'warning':
        return css.Warning
      case 'debug':
        return css.Debug
      default:
        return css.Info
    }
  }

  const navigateHandler = (event) => {
    let url = null
    if (e.deploymentId) {
      url = `/deployments/${e.deploymentId}/events`
    }
    if (e.templateId) {
      url = `/templates/${e.templateId}`
    }
    if (url) {
      dispatch(redirect(url))
      closeNotificationHandler()
    }
  }

  const hoverClass = e.deploymentId || e.templateId ? css.CallToAction : ''

  return (
    <div
      onClick={(event) => navigateHandler(event)}
      className={`${css.Event} ${hoverClass} ${!e.read ? css.Unread : ''}`}
    >
      <ul>
        <li className={`${css.Icon} ${color()}`}>
          <i className={icon()} onClick={removeEventHandler}></i>
        </li>
        <li className={css.Content}>
          <span className={css.Source}>
            {e.source} - {e.reason}
          </span>
          {e.message}
          <span className={css.Time}>
            {timeHelper.fromNow(e.time)} - {timeHelper.dateToFormat(e.time)}
          </span>
        </li>
        {/* <li className={css.Close}>
          <button onClick={(event) => removeEventHandler(event)}>
            <i className='fa-solid fa-xmark'></i>
          </button>
        </li> */}
      </ul>
    </div>
  )
}

export default EventCard
