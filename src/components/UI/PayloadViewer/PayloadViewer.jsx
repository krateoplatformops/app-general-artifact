import React from 'react'

import css from './PayloadViewer.module.scss'

const PayloadViewer = ({ payload }) => (
  <ul className={css.UlPayload}>
    {payload
      .filter((x) => x.value && x.value.length > 0)
      .map((i) => (
        <li key={i.name}>
          <span>{i.title}:</span>
          {i.value.toString()}
        </li>
      ))}
  </ul>
)

export default PayloadViewer
