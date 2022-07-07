import React from 'react'
import { useDispatch } from 'react-redux'

import { redirect, socketEventRemove } from '../../../../../redux/actions'
import { timeHelper } from '../../../../../helpers'
import css from './EventCard.module.scss'
import { uiConstants } from '../../../../../constants'

const EventCard = ({ e, toggleNotification }) => {
  let dispatch = useDispatch()

  const clickHandler = () => {
    if (e.ref) {
      if (e.ref.deploymentId) {
        toggleNotification()
        dispatch(redirect(`/deployments/${e.ref.deploymentId}/events`))
      }
      if (e.ref.templateId) {
        toggleNotification()
        dispatch(redirect(`/templates/${e.ref.templateId}`))
      }
    }
  }

  const removeEventHandler = (event) => {
    event.stopPropagation()
    dispatch(socketEventRemove(e.id))
  }

  const icon = () => {
    if (e.ref?.deploymentId) {
      return {
        icon: uiConstants.nav.find((x) => x.to === 'deployments').icon,
        css: css.Violet
      }
    }
    if (e.ref?.templateId) {
      return {
        icon: uiConstants.nav.find((x) => x.to === 'templates').icon,
        css: css.Violet
      }
    }
    return { icon: 'fa-solid fa-comment', css: css.Default }
  }

  const i = icon()

  return (
    <div
      onClick={() => clickHandler()}
      className={`${css.Event} ${
        Object.keys(e.ref || []).length > 0 ? css.CallToAction : ''
      }`}
    >
      <div className={css.Spacer}>
        <ul>
          <li className={`${css.Icon} ${i.css}`}>
            <i class={i.icon}></i>
          </li>
          <li className={css.Content}>
            {e.message}
            <span className={css.Time}>{timeHelper.fromNow(e.time)}</span>
          </li>
          <li className={css.Close}>
            <button onClick={(event) => removeEventHandler(event)}>
              <i className='fa-solid fa-xmark'></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default EventCard
