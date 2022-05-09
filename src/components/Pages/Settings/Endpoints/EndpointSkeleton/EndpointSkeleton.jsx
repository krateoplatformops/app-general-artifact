import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import css from './EndpointSkeleton.module.scss'

const EndpointSkeleton = () => (
  <div className={css.SkeletonGrid}>
    {[...Array(4)].map((s, key) => (
      <div key={key}>
        <Skeleton height={220} />
      </div>
    ))}
  </div>
)

export default EndpointSkeleton
