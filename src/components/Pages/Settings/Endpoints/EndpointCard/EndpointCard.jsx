import React from 'react'

import css from './EndpointCard.module.scss'
import Label from '../../../../UI/Label/Label'

const EndpointCard = ({ h, openModal }) => {
  const deleteHandler = () => {
    openModal(h)
  }

  return (
    <ul className={css.UlEndpoint}>
      <li className={css.LiIcon}>
        <i className={`fa-brands fa-${h.provider}`}></i>
      </li>
      <li className={css.LiInfo}>
        <div className={css.Domain}>{h.domain}</div>
        <Label title={'Secret Name'}>{h.secretName}</Label>
        <Label title={'Api Url'}>{h.apiUrl}</Label>
      </li>
      <li>
        <button className={css.DeleteBtn} onClick={() => deleteHandler()}>
          <i className='fa-solid fa-trash-can'></i>
        </button>
      </li>
    </ul>
  )
}

export default EndpointCard