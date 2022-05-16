import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import css from './PackageSkeleton.module.scss'

const PackageSkeleton = () => (
  <div className={css.SkeletonGrid}>
    {[...Array(4)].map((s, key) => (
      <div key={key}>
        <Skeleton height={210} />
      </div>
    ))}
  </div>
)

export default PackageSkeleton
