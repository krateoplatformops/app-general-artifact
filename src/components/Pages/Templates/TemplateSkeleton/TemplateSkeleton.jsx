import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import css from './TemplateSkeleton.module.scss'

const TemplateSkeleton = ({ cardMode }) => (
  <div className={cardMode ? css.SkeletonGrid : css.SkeletonList}>
    {[...Array(4)].map((s, key) => (
      <div key={key}>
        <Skeleton height={cardMode ? 200 : 120} />
      </div>
    ))}
  </div>
)

export default TemplateSkeleton
