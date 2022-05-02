import React from 'react'
import { timeHelper } from '../../../../../../helpers'

import css from './Log.module.scss'

const Log = ({ log }) => (
  <div className={css.Log}>
    <ul className={css.UlInfo}>
      <li>
        {log.source} - {log.reason}
      </li>
      <li>{timeHelper.dateToFormat(log.time)}</li>
    </ul>

    <ul className={css.UlLog}>
      <li className={css[log.level]}>{log.level}</li>
      <li className={css.Message}>{log.message}</li>
      <li className={css.TimeFrom}>{timeHelper.fromNow(log.time)}</li>
    </ul>
  </div>
)

export default Log
