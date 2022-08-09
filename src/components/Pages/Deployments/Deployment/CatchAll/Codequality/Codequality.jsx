import React from 'react'
import { timeHelper } from '../../../../../../helpers'

import Card from '../../../../../UI/Card/Card'
import Tag from '../../../../../UI/Tag/Tag'
import Follower from '../../../../../UI/Follower/Follower'
import Label from '../../../../../UI/Label/Label'

import css from './Codequality.module.scss'
import Metric from './Metric/Metric'

const Codequality = ({ deploy, plugin, content }) => {
  return (
    <ul className='ul-double-view'>
      <li className='li-menu'>
        <Follower>
          <Card title={plugin.name}>
            <Label title='organization'>{content.component.organization}</Label>
            <Label title='name'>{content.component.name}</Label>
            <Label title='version'>{content.component.version}</Label>
            <Label title='analysis Date'>
              {timeHelper.dateGenToFormat(content.component.analysisDate)}
            </Label>
            <div className={css.Tags}>
              {content.component.tags.map((t) => (
                <Tag tag={t} key={t} />
              ))}
            </div>

            <a
              href={content.link}
              className={css.ExtLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fa-solid fa-up-right-from-square'></i>
              view more
            </a>
          </Card>
        </Follower>
      </li>
      <li className='li-content'>
        <div className={css.MetricTitle}>alerts</div>
        <ul className={css.UlMetrics}>
          {content.metrics
            .filter((x) => x.category === 'alerts')
            .map((m) => (
              <li key={m.metric}>
                <Metric m={m} />
              </li>
            ))}
        </ul>
        <div className={css.MetricTitle}>stats</div>
        <ul className={css.UlMetrics}>
          {content.metrics
            .filter((x) => x.category !== 'alerts')
            .map((m) => (
              <li key={m.metric}>
                <Metric m={m} />
              </li>
            ))}
        </ul>
      </li>
    </ul>
  )
}

export default Codequality
