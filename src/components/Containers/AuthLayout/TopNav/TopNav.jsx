import React, { useContext } from 'react'
import { connect } from 'react-redux'

import Search from './Search/Search'
import css from './TopNav.module.scss'
import Brand from './Brand/Brand'
import { UserContext } from '../../../Context/UserContext'

const TopNav = ({ socket }) => {
  const { toggleNotification } = useContext(UserContext)

  return (
    <div className={css.TopNav}>
      <Brand />
      <Search />
      <div className={css.Icon}>
        <button className={css.BtnIcons} onClick={toggleNotification}>
          {socket.events.filter((x) => !x.read).length > 0 && (
            <span className={css.Unread}></span>
          )}
          <i className='fa-solid fa-bell'></i>
        </button>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(TopNav)
