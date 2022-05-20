import React from 'react'

import css from './ComponentCard.module.scss'

const ComponentCard = ({ c }) => (
  <ul className={css.Card}>
    <li className={css.Name}>
      <span> {c.version}</span>
      {c.name}
    </li>
    <li className={css.Status}>
      <span className={c.status === 200 ? css.Ok : css.Warning}>
        {c.statusText} {c.status}
        <i
          className={
            c.status === 200
              ? 'fa-solid fa-check'
              : 'fa-solid fa-triangle-exclamation'
          }
        ></i>
      </span>
    </li>
  </ul>
)

export default ComponentCard
