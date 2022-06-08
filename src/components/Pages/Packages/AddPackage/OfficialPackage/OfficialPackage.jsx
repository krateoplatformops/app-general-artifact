import React from 'react'

import css from './OfficialPackage.module.scss'

const OfficialPackage = ({ p }) => (
  <React.Fragment>
    <ul className={css.UlPkg}>
      <li>
        <img src={p.icon} alt={p.name} />
      </li>
      <li>{p.name}</li>
      <li className={css.LiFuture}>{p.version}</li>
    </ul>
  </React.Fragment>
)

export default OfficialPackage
