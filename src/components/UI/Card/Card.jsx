import React from 'react'

import css from './Card.module.scss'

const Card = ({ children, title, anchor, icon }) => {
  return (
    <div className={css.Card}>
      {anchor && <div id={anchor} className={css.Anchor}></div>}
      {title && (
        <div className={css.Title}>
          {icon && <i className={icon}></i>} {title}
        </div>
      )}
      {children}
    </div>
  )
}

export default Card
