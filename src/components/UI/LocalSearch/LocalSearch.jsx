import React from 'react'
import { Link } from 'react-router-dom'

import css from './LocalSearch.module.scss'

const LocalSearch = ({ buttons, children }) => {
  return (
    <div className={css.Container}>
      {children}
      {(buttons || []).map((btn) =>
        btn.action ? (
          <button key={btn.icon} className={css.Action} onClick={btn.action}>
            <i className={btn.icon} />
          </button>
        ) : (
          <Link className={css.Action} to={btn.to} key={btn.icon}>
            <i className={btn.icon} />
          </Link>
        )
      )}
    </div>
  )
}

export default LocalSearch
