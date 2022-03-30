import React from 'react'

import css from './Segment.module.scss'

const Segment = ({ children }) => {
  return <ul className={css.UlSegment}>{children}</ul>
}

export default Segment
