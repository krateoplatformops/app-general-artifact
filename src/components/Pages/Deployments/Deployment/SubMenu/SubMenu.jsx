import React, { useState } from 'react'

import css from './SubMenu.module.scss'

const SubMenu = () => {
  const [show, setShow] = useState(false)

  return (
    <React.Fragment>
      <button
        type='button'
        className={css.Button}
        onClick={() => setShow(!show)}
      >
        <i className='fa-solid fa-ellipsis-vertical'></i>
      </button>
      {show && <div className={css.SubMenu}>dsadsad</div>}
    </React.Fragment>
  )
}

export default SubMenu
