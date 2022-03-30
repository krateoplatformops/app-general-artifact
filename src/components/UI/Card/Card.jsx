import React from 'react'

import css from './Card.module.scss'

const Card = ({ children, title }) => {
  return (
    <div className={css.Card}>
      {title && <div className={css.Title}>{title}</div>}
      {children}
    </div>
  )
}

export default Card
