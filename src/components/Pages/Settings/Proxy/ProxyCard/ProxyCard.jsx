import React from 'react'

import css from './ProxyCard.module.scss'
import Label from '../../../../UI/Label/Label'

const ProxyCard = ({ p, openModal }) => {
  const deleteHandler = () => {
    openModal(p)
  }

  return (
    <ul className={css.UlProxy}>
      <li className={css.LiIcon}>
        <i className={`fa-solid fa-globe`}></i>
      </li>
      <li className={css.LiInfo}>
        <div className={css.BasePath}>{p.base}</div>
        <Label title={'Secret Name'}>{p.secretName}</Label>
        <Label title={'Target'}>{p.target}</Label>
      </li>
      <li>
        <button className={css.DeleteBtn} onClick={() => deleteHandler()}>
          <i className='fa-solid fa-trash-can'></i>
        </button>
      </li>
    </ul>
  )
}

export default ProxyCard
