import React from 'react'

import Card from '../../../../UI/Card/Card'
import css from './Overview.module.scss'

const Overview = ({ deploy }) => {
  return (
    <ul className={css.UlOverview}>
      <li>
        <Card title="Overview">{deploy.spec.description}</Card>
      </li>
      <li>
        <Card title="Links">
          {(deploy.spec.links || []).map((link) => (
            <a
              key={link.url}
              href={link.url}
              className={css.ExtLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={link.icon}></i>
              <span>{link.title}</span>
            </a>
          ))}
        </Card>
      </li>
    </ul>
  )
}

export default Overview
