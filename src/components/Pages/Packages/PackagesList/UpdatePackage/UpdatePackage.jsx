import React from 'react'

import css from './UpdatePackage.module.scss'

const UpdatePackage = ({ pkg }) => {
  return (
    <div>
      You are updating
      <span className={css.Name}>{pkg.current.name}</span>
      <ul className={css.UlFrom}>
        <li className={css.LiCurrent}>{pkg.current.version}</li>
        <li>
          <i className='fa-solid fa-angles-right'></i>
        </li>
        <li className={css.LiFuture}>{pkg.future.version}</li>
      </ul>
    </div>
  )
}
export default UpdatePackage
