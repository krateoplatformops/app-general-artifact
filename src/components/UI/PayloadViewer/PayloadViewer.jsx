import React from 'react'

import css from './PayloadViewer.module.scss'

const PayloadViewer = ({ payload }) => (
  <ul className={css.UlPayload}>
    {payload.map((i) => (
      <li key={i.name}>
        <span>{i.title}:</span>
        {i.value}
      </li>
    ))}
  </ul>
)

export default PayloadViewer
