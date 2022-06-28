import React from 'react'
import { timeHelper, uiHelper } from '../../../../../../../helpers'

import Card from '../../../../../../UI/Card/Card'
import css from './Pipeline.module.scss'
import Stats from './Stats/Stats'
import Duration from './Duration/Duration'

const Pipeline = ({ pipeline, runs }) => (
  <Card title={pipeline.name} icon={pipeline.icon} anchor={pipeline.id}>
    <ul className={css.UlPipeline}>
      <li className={css.LiCharts}>
        <Stats runs={runs} />
        <Duration runs={runs} />
      </li>
      <li className={css.LiRuns}>
        <ul className={css.RunsList}>
          {runs.map((r) => (
            <li key={r.id}>
              <a
                href={r.url}
                target='_blank'
                rel='noreferrer'
                className={css.PipeLink}
              >
                <ul className={css.UlRun}>
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
                    <ul className={css.InfoDuration}>
                      <li>{timeHelper.duration(r.duration)}</li>
                    </ul>
                  </li>
                </ul>
              </a>
            </li>
          ))}
        </ul>
      </li>
    </ul>

    <a
      href={pipeline.link}
      target='_blank'
      rel='noreferrer'
      className={css.FooterLnk}
    >
      {pipeline.link}
    </a>
  </Card>
)

export default Pipeline
