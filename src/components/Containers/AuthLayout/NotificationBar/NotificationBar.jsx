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
import { timeHelper } from '../../../../helpers'

const Notification = ({ socket }) => {
  const dispatch = useDispatch()
  const { toggleNotification, notificationOpen } = useContext(UserContext)

  useEffect(() => {
    if (!socket.error) {
      dispatch(socketSubscribe('notifications'))
    }
    return () => {
      if (!socket.error) {
        dispatch(socketUnsubscribe('notifications'))
      }
    }
  }, [dispatch, socket.error])

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
            <span>{timeHelper.fromNow(e.time)}</span>
            {e.message}
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
