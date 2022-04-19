import React from 'react'

import css from './HostCard.module.scss'
import Label from '../../../../UI/Label/Label'

const excludedProps = ['_id', '__v', 'provider', 'domain', 'createdAt']

const HostCard = ({ h, openModal }) => {
  const deleteHandler = () => {
    openModal(h)
  }

  return (
    <ul className={css.UlHost}>
      <li className={css.LiIcon}>
        <i className={`fa-brands fa-${h.provider}`}></i>
      </li>
      <li className={css.LiInfo}>
        <div className={css.Domain}>{h.domain}</div>
        {Object.keys(h)
          .filter((k) => excludedProps.indexOf(k) === -1)
          .map((k) => (
            <Label key={k} title={k}>
              {h[k]}
            </Label>
          ))}
      </li>
      <li>
        <button className={css.DeleteBtn} onClick={() => deleteHandler()}>
          <i className='fa-solid fa-trash-can'></i>
        </button>
      </li>
    </ul>
  )
}

export default HostCard
