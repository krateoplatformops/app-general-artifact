import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import Card from '../../../../../UI/Card/Card'
import Follower from '../../../../../UI/Follower/Follower'
import { pluginHelper } from '../../../../../../helpers'

const Documentation = ({ plugin, content }) => {
  return (
    <ul className="ul-double-view">
      <li className="li-menu">
        <Follower>
          <Card title={plugin.name}>
            {plugin.values.map((x) => (
              <a
                href={`#${x.replace(/\s/g, '-')}`}
                key={x}
                className="common-lnk"
              >
                {x}
              </a>
            ))}
          </Card>
        </Follower>
      </li>
      <li className="li-content">
        {content.list.map((x) => (
          <Card title={x.name} key={x.name} anchor={x.name.replace(/\s/g, '-')}>
            <div className="markdown-body">
              <ReactMarkdown remarkPlugins={[gfm]}>
                {pluginHelper.b64toAscii(x.content)}
              </ReactMarkdown>
            </div>
          </Card>
        ))}
      </li>
    </ul>
  )
}

export default Documentation
