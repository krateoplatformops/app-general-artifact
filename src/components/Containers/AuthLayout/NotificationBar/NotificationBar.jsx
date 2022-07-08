import React, { useEffect, useContext } from 'react'
import { connect, useDispatch } from 'react-redux'

import { UserContext } from '../../../Context/UserContext'
import css from './NotificationBar.module.scss'
import SideBar from '../../../UI/SideBar/SideBar'
import {
  socketSubscribe,
  socketUnsubscribe,
  socketEventSetAllRead
} from '../../../../redux/actions'
import EventCard from './EventCard/EventCard'

const Notification = ({ socket }) => {
  const dispatch = useDispatch()
  const { toggleNotification, notificationOpen } = useContext(UserContext)

  const closeNotificationHandler = () => {
    dispatch(socketEventSetAllRead())
    toggleNotification()
  }

  useEffect(() => {
    if (!socket.error && socket.init) {
      dispatch(socketSubscribe('notifications'))
    }
    return () => {
      if (!socket.error) {
        dispatch(socketUnsubscribe('notifications'))
      }
    }
  }, [dispatch, socket.error, socket.init])

  return (
    <SideBar
      closeSidebar={closeNotificationHandler}
      title={'Notifications'}
      isOpen={notificationOpen}
    >
      <ul className={css.UlEvent}>
        {socket.events.map((e) => (
          <li key={e.id}>
            <EventCard
              e={e}
              closeNotificationHandler={closeNotificationHandler}
            />
          </li>
        ))}
      </ul>
    </SideBar>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Notification)
