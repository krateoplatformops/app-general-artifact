import React from 'react'

import css from './LocalSearch.module.scss'

const LocalSearch = ({ buttons, children }) => {
  return (
    <div className={css.Container}>
      {children}
      {/* <input type='text' placeholder='Search' className={css.Search} /> */}
      {(buttons || []).map((btn) => (
        <button key={btn.icon} className={css.Button} onClick={btn.action}>
          <i className={btn.icon} />
        </button>
      ))}
    </div>
  )
}

export default LocalSearch
