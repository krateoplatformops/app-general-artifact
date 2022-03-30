import React, { useContext } from 'react'
import { connect, useDispatch } from 'react-redux'

import { UserContext } from '../../../../../Context/UserContext'
import { logout } from '../../../../../../redux/actions'
import css from './Menu.module.scss'
import SideBar from '../../../../../UI/SideBar/SideBar'
import { uiConstants } from '../../../../../../constants/ui.constants'

const Menu = (props) => {
  const { switchTheme, theme } = useContext(UserContext)
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <React.Fragment>
      <SideBar
        closeSidebar={props.closeMenuHandler}
        title={'User profile'}
        isOpen={props.isOpen}
      >
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
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Menu)
