import React from 'react'
import { Handle } from 'react-flow-renderer'

import { flowHelper } from '../../../../../../../helpers'
import css from './CustomNode.module.scss'

const CustomNode = ({ id, data, isConnectable }) => {
  const nodeClickHandler = (e) => {
    if (data.resourceDetailsHandler) {
      data.resourceDetailsHandler(data)
    }
  }

  return (
    <React.Fragment>
      <Handle
        type='target'
        position='left'
        id='a'
        style={{ background: 'var(--border)' }}
        isConnectable={isConnectable}
      />
      <ul className={css.CustomNode} onClick={nodeClickHandler}>
        <li
          className={`${css.LiIcon} ${css[flowHelper.iconColor(data.health)]}`}
        >
          <i className={`fa-solid ${flowHelper.resourceIcon(data.kind)}`}></i>
          <b>{data.kind}</b>
        </li>
        <li className={css.LiName}>{data.name}</li>
      </ul>
      <Handle
        type='source'
        position='right'
        id='b'
        style={{ background: 'var(--border)' }}
        isConnectable={isConnectable}
      />
    </React.Fragment>
  )
}

export default CustomNode
