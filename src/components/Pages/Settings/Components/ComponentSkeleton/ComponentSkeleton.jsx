import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import css from './ComponentSkeleton.module.scss'

const ComponentSkeleton = () => (
  <div className={css.SkeletonGrid}>
    {[...Array(6)].map((s, key) => (
      <div key={key}>
        <Skeleton height={80} />
      </div>
    ))}
  </div>
)

export default ComponentSkeleton
