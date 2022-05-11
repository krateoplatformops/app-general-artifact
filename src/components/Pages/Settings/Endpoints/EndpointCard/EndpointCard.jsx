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
        <i className={h.icon}></i>
      </li>
      <li className={css.LiInfo}>
        <Label title='Name'>
          <div className={css.Name}>{h.name}</div>
        </Label>
        <ul className={css.UlLabels}>
          <li>
            <Label title={'Type'}>{h.type}</Label>
          </li>
          <li>
            <Label title={'Target'}>{h.target}</Label>
          </li>
          <li>
            <Label title={'Namespace'}>{h.namespace}</Label>
          </li>
          <li>
            <Label title={'Secret Name'}>{h.secretName}</Label>
          </li>
        </ul>
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
