import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'

import css from './Notification.module.scss'
import SideBar from '../../../../UI/SideBar/SideBar'
import { socketSubscribe } from '../../../../../redux/actions'

const Notification = (props) => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)

  const closeMenuHandler = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (props.socket.subscriptions.indexOf('notifications') === -1) {
      dispatch(socketSubscribe('notifications'))
    }
  })

  return (
    <React.Fragment>
      <button className={css.Bell} onClick={() => setIsOpen(true)}>
        <i className='fa-solid fa-bell'></i>
      </button>
      <SideBar
        closeSidebar={closeMenuHandler}
        title={'Notifications'}
        isOpen={isOpen}
      >
        <h1>{props.socket.events.length}</h1>

        {props.socket.events.map((item) => (
          <div key={item.id}>{item.message}</div>
        ))}
      </SideBar>
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Notification)
