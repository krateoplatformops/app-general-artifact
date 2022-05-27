import React from 'react'

import css from './Metric.module.scss'

const Metric = ({ m }) => (
  <ul className={css.UlCard}>
    <li className={css.LiValue}>
      <span className={`${css.Value} ${css[m.color]}`}>
        <i className={m.icon}></i>
        {m.value}
      </span>
    </li>
    <li className={css.LiName}>{m.label}</li>
  </ul>
)

export default Metric
