import React, { useContext } from 'react'
import { connect, useDispatch } from 'react-redux'

import { UserContext } from '../../../../../Context/UserContext'
import { logout, userReset } from '../../../../../../redux/actions'
import css from './Menu.module.scss'
import SideBar from '../../../../../UI/SideBar/SideBar'

const Menu = (props) => {
  const { switchTheme } = useContext(UserContext)
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(userReset())
    dispatch(logout())
  }

  return (
    <React.Fragment>
      <SideBar
        closeSidebar={props.closeMenuHandler}
        title={'Profile'}
        isOpen={props.isOpen}
      >
        {/* username: {props.user.profile.username}
        <br />
        email: {props.user.profile.email} */}
        {/* <br />
        <br />
        <pre>{JSON.stringify(props.user.profile)}</pre> */}
        <ul className={css.Menu}>
          <li>
            <button onClick={switchTheme}>theme</button>
          </li>
          <li>
            <button onClick={logoutHandler}>logout</button>
          </li>
        </ul>
      </SideBar>
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Menu)
