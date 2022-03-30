import React from 'react'
import { connect } from 'react-redux'

import css from './NotificationQueue.module.scss'

import Notification from './Notification/Notification'
import { removeNotification } from '../../../redux/actions'

const NotificationQueue = (props) => (
  <div className={css.NotificationQueue}>
    {props.notify.notificationQueue.map((n) => (
      <Notification
        key={n.guid}
        message={n.message}
        guid={n.guid}
        time={n.time}
        severity={n.severity}
        removeNotification={props.removeNotification}
      />
    ))}
  </div>
)

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { removeNotification })(
  NotificationQueue
)
