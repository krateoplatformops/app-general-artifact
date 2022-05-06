import React from 'react'

import css from './CounterCard.module.scss'

const CounterCard = ({ title, counter, icon, color }) => (
  <div className={`${css.Card} ${css[color]}`}>
    <ul className={css.UlHeader}>
      <li>
        <i className={icon}></i>
      </li>
      <li>{counter}</li>
    </ul>
    <div className={css.Title}>{title}</div>
  </div>
)

export default CounterCard
