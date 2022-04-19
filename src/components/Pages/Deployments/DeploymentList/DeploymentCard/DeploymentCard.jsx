import React from 'react'
import { Link } from 'react-router-dom'

import css from './DeploymentCard.module.scss'
import { timeHelper } from '../../../../../helpers'

import Tag from '../../../../UI/Tag/Tag'

const DeploymentCard = ({ d }) => (
  <Link to={`/deployments/${d._id}`} className={css.Link}>
    <div className={css.Container}>
      <ul className={css.UlDeployment}>
        <li className={css.LiIcon}>
          <i className={d.claim.spec.dashboard.icon}></i>
        </li>
        <li className={css.LiInfo}>
          <b>{d.claim.spec.name}</b>
          <span>{d.claim.spec.dashboard.description}</span>
        </li>
        <li className={css.LiDate}>{timeHelper.dateToFormat(d.createdAt)}</li>
      </ul>
      <ul className={css.UlStatus}>
        <li className={css.LiTags}>
          {(d.claim.spec.dashboard.tags || []).map((t) => (
            <Tag key={t} tag={t} />
          ))}
        </li>
        <li className={css.LiStats}>
          <span className={css.SpanSecurity}>
            0 <i className='fa-solid fa-shield'></i>
          </span>
          <span className={css.SpanBugs}>
            1 <i className='fa-solid fa-bug'></i>
          </span>
          <span className={css.SpanTests}>
            0 <i className='fa-solid fa-flask-vial'></i>
          </span>
          <span className={css.SpanCosts}>
            0 <i className='fa-solid fa-coins'></i>
          </span>
        </li>
      </ul>
    </div>
  </Link>
)

export default DeploymentCard
