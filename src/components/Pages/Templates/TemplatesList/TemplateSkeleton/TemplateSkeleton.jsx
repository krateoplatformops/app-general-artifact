import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import css from './TemplateSkeleton.module.scss'

const TemplateSkeleton = () => (
  <div className={css.SkeletonGrid}>
    {[...Array(6)].map((s, key) => (
      <div key={key}>
        <Skeleton height={240} />
      </div>
    ))}
  </div>
)

export default TemplateSkeleton
