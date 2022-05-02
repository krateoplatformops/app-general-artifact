import React from 'react'
import { timeHelper, uiHelper } from '../../../../../../../helpers'

import Card from '../../../../../../UI/Card/Card'
import css from './Pipeline.module.scss'
import Stats from './Stats/Stats'

const Pipeline = ({ pipeline, runs }) => (
  <Card title={pipeline.name} icon={pipeline.icon} anchor={pipeline.id}>
    <ul className={css.UlPipeline}>
      <li className={css.LiCharts}>
        <Stats runs={runs} />
      </li>
      <li className={css.LiRuns}>
        {runs.map((r) => (
          <ul key={r.id} className={css.UlRun}>
            <li style={{ color: uiHelper.colorByStatus(r.status) }}>
              <i className='fa-solid fa-circle'></i>
            </li>
            <li className={css.LiRunInfo}>
              <ul className={css.InfoHeader}>
                <li>id: {r.id}</li>
                <li>{timeHelper.dateToFormat(r.time)}</li>
              </ul>
              <ul className={css.InfoBody}>
                <li> {r.message}</li>
                <li>{timeHelper.fromNow(r.time)}</li>
              </ul>
            </li>
            <li>
              <a
                href={r.url}
                target='_blank'
                rel='noreferrer'
                className={css.PipeLink}
              >
                <i className='fa-solid fa-arrow-up-right-from-square'></i>
              </a>
            </li>
          </ul>
        ))}
      </li>
    </ul>
  </Card>
)

export default Pipeline
