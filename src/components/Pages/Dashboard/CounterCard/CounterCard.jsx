import React from 'react'
import { Link } from 'react-router-dom'

import css from './CounterCard.module.scss'

const CounterCard = ({ to, title, counter, icon, color }) => (
  <Link
    to={to || '/'}
    className={`${css.Card} ${css[color]} ${!to ? css.LinkNone : ''}`}
  >
    <div className={css.Title}>{title}</div>
    <ul className={css.UlHeader}>
      <li>
        <i className={icon}></i>
      </li>
      <li>{counter}</li>
    </ul>
  </Link>
)

export default CounterCard
