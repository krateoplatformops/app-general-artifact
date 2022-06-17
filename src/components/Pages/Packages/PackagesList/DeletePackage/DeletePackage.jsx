import React from 'react'

import css from './DeletePackage.module.scss'

const DeletePackage = ({ pkg }) => (
  <React.Fragment>
    You are deleting
    <span className={css.Name}>{pkg.name}</span>
  </React.Fragment>
)

export default DeletePackage
