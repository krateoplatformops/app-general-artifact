import React from 'react'
import { connect, useDispatch } from 'react-redux'

import { logout } from '../../../../redux/actions'
import css from './Profile.module.scss'
import Loader from '../../../UI/Loader/Loader'
import Card from '../../../UI/Card/Card'

const Profile = ({ user }) => {
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
  }

  if (!user.profile) {
    return <Loader />
  }

  return (
    <React.Fragment>
      <Card title={'Profile'}>
        <ul className={css.UlInfo}>
          <li>
            <b>ID:</b> {user.profile.id}
          </li>
          <li>
            <b>Display name:</b> {user.profile.displayName}
          </li>
          <li>
            <b>Username:</b> {user.profile.username}
          </li>
          <li>
            <b>Email:</b> {user.profile.email}
          </li>
        </ul>
      </Card>
      <Card title={'Logout'}>
        <button onClick={logoutHandler} className='primary-button'>
          logout
        </button>
      </Card>
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Profile)
