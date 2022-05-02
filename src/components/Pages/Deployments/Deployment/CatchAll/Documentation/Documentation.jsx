import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import Card from '../../../../../UI/Card/Card'
import Follower from '../../../../../UI/Follower/Follower'

const Documentation = ({ plugin, content }) => {
  return (
    <ul className='ul-double-view'>
      <li className='li-menu'>
        <Follower>
          <Card title={plugin.name}>
            {plugin.values.map((x) => (
              <a
                href={`#${x.replace(/\s/g, '-')}`}
                key={x}
                className='common-lnk'
              >
                {x}
              </a>
            ))}
          </Card>
        </Follower>
      </li>
      <li className='li-content'>
        {content.map((x) => (
          <Card title={x.key} key={x.key} anchor={x.key.replace(/\s/g, '-')}>
            <div className='markdown-body'>
              <ReactMarkdown remarkPlugins={[gfm]}>{x.value}</ReactMarkdown>
            </div>
          </Card>
        ))}
      </li>
    </ul>
  )
}

export default Documentation
