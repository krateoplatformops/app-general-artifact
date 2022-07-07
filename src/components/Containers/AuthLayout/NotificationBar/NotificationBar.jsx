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

  useEffect(() => {
    if (socket.events.filter((x) => !x.read).length > 0 && notificationOpen) {
      dispatch(socketEventSetAllRead())
    }
  }, [dispatch, notificationOpen, socket.events])

  return (
    <SideBar
      closeSidebar={toggleNotification}
      title={'Notifications'}
      isOpen={notificationOpen}
    >
      <ul className={css.UlEvent}>
        {socket.events.map((e) => (
          <li key={e.id}>
            <EventCard e={e} toggleNotification={toggleNotification} />
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
