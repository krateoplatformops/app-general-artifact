import React, { useEffect, useContext } from 'react'
import { connect, useDispatch } from 'react-redux'

import { UserContext } from '../../../Context/UserContext'
// import css from './NotificationBar.module.scss'
import SideBar from '../../../UI/SideBar/SideBar'
import { socketSubscribe } from '../../../../redux/actions'

const Notification = (props) => {
  const dispatch = useDispatch()
  const { toggleNotification, notificationOpen } = useContext(UserContext)

  useEffect(() => {
    if (props.socket.subscriptions.indexOf('notifications') === -1) {
      dispatch(socketSubscribe('notifications'))
    }
  })

  return (
    <SideBar
      closeSidebar={toggleNotification}
      title={'Notifications'}
      isOpen={notificationOpen}
    >
      <h1>{props.socket.events.length}</h1>

      {props.socket.events.map((item) => (
        <div key={item.id}>{item.message}</div>
      ))}
    </SideBar>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Notification)
