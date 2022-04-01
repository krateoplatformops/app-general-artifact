import React, { useContext } from 'react'
import { connect, useDispatch } from 'react-redux'

import css from './UserBar.module.scss'
import { UserContext } from '../../../Context/UserContext'
import { logout } from '../../../../redux/actions'
import SideBar from '../../../UI/SideBar/SideBar'
import { uiConstants } from '../../../../constants/ui.constants'

const UserBar = (props) => {
  const { switchTheme, theme, toggleUser, userOpen } = useContext(UserContext)
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <SideBar closeSidebar={toggleUser} title={'User profile'} isOpen={userOpen}>
      {props.user.profile && (
        <React.Fragment>
          <div className={css.Title}>information</div>
          <ul className={css.UlInfo}>
            <li>
              <b>Username:</b> {props.user.profile.username}
            </li>
            <li>
              <b>Email:</b> {props.user.profile.email}
            </li>
          </ul>
        </React.Fragment>
      )}
      <div className={css.Title}>theme</div>
      <button onClick={switchTheme} className='default-button'>
        {theme === uiConstants.themes.light ? (
          <i className='fa-solid fa-sun'></i>
        ) : (
          <i className='fa-solid fa-moon'></i>
        )}
        switch theme
      </button>
      <div className={css.Title}>logout</div>
      <button onClick={logoutHandler} className='default-button'>
        logout
      </button>
    </SideBar>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(UserBar)
