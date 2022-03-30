import React from 'react'

import css from './Notification.module.scss'

const Notification = (props) => (
  <div
    className={`${css.Notification} ${css[props.severity]}`}
    onClick={() => props.removeNotification(props.guid)}
  >
    {props.message}
    <span className={css.Bar}></span>
  </div>
)

export default Notification
