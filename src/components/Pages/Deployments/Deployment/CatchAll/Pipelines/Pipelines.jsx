import React from 'react'

import Card from '../../../../../UI/Card/Card'
import Follower from '../../../../../UI/Follower/Follower'
import Pipeline from './Pipeline/Pipeline'

const Pipelines = ({ plugin, content }) => (
  <ul className='ul-double-view'>
    <li className='li-menu'>
      <Follower>
        <Card title={plugin.name}>
          {content.list.map((c) => {
            const p = c.pipeline
            return (
              <a href={`#${p.id}`} key={p.id} className='common-lnk'>
                <i className={p.icon} />
                {p.name}
              </a>
            )
          })}
        </Card>
      </Follower>
    </li>
    <li className='li-content'>
      {content.list.map((c) => (
        <Pipeline key={c.pipeline.id} pipeline={c.pipeline} runs={c.runs} />
      ))}
    </li>
  </ul>
)

export default Pipelines
