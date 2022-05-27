import React from 'react'

import css from './SecretCard.module.scss'
import Label from '../../../../UI/Label/Label'

const SecretCard = ({ h, openModal }) => {
  const deleteHandler = () => {
    openModal(h)
  }

  return (
    <div className={css.Container}>
      <ul className={css.UlSecret}>
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
              <Label title={'Namespace'}>{h.namespace}</Label>
            </li>
          </ul>
        </li>
      </ul>
      <div className={css.Footer}>
        <button className={css.DeleteBtn} onClick={(e) => deleteHandler(e)}>
          <i className='fa-solid fa-trash-can'></i>
        </button>
      </div>
    </div>
  )
}

export default SecretCard
