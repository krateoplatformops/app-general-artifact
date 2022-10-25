import React from 'react'

import css from './StrategyCard.module.scss'
import Label from '../../../../UI/Label/Label'

const StrategyCard = ({ s, name, openModal }) => {
  const deleteHandler = () => {
    openModal(name)
  }

  return (
    <div className={css.Container}>
      <ul className={css.UlEndpoint}>
        <li className={css.LiIcon}>
          <i className={s.icon}></i>
        </li>
        <li className={css.LiInfo}>
          <Label title="Name">
            <div className={css.Name}>{s.name}</div>
          </Label>
          <ul className={css.UlLabels}>
            <li>
              <Label title={'Strategy'}>{s.strategy}</Label>
            </li>
          </ul>
        </li>
      </ul>
      <div className={css.Footer}>
        <button className={css.DeleteBtn} onClick={() => deleteHandler()}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  )
}

export default StrategyCard
