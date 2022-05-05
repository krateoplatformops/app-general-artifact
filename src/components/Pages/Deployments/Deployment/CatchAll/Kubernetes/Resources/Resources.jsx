import React from 'react'

import { timeHelper } from '../../../../../../../helpers'
import Card from '../../../../../../UI/Card/Card'

import css from './Resources.module.scss'

const Resources = ({ k, resourceDetailsHandler }) => {
  const icon = require(`../../../../../../../assets/kubernetes/${k.icon}.svg`)

  const status = (r) => {
    if (r.status?.containerStatuses) {
      const statuses = r.status.containerStatuses
      const statusesArray = Object.keys(statuses).map((key) => {
        return Object.keys(statuses[key].state)[0]
      })
      return (
        <div className={css.StatusArray}>
          {statusesArray.map((s, key) => (
            <span
              key={key}
              {...{
                [s.toLowerCase()]: 'true'
              }}
            >
              {s}
            </span>
          ))}
        </div>
      )
    }
  }

  return (
    <Card title={k.kind} anchor={k.kind}>
      <ul className={css.ResourcesList}>
        {k.items.map((r) => (
          <li key={r.metadata.uid}>
            <button
              className={css.BtnDetails}
              onClick={() =>
                resourceDetailsHandler({ kind: k.kind, manifest: r })
              }
            >
              <ul className={css.UlResource}>
                <li>
                  <img src={icon} alt={r.kind} />
                </li>
                <li className={css.LiResInfo}>
                  <ul className={css.InfoHeader}>
                    <li>{r.metadata.namespace}</li>
                    <li>
                      {timeHelper.dateGenToFormat(r.metadata.creationTimestamp)}
                    </li>
                  </ul>
                  <ul className={css.InfoBody}>
                    <li>{r.metadata.name}</li>
                    <li>
                      {timeHelper.fromNowGen(r.metadata.creationTimestamp)}
                    </li>
                  </ul>
                  {status(r)}
                </li>
              </ul>
            </button>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default Resources
