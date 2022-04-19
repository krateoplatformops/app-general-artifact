import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import css from './DeploymentSkeleton.module.scss'

const DeploymentSkeleton = () => (
  <div className={css.SkeletonGrid}>
    {[...Array(4)].map((s, key) => (
      <div key={key}>
        <Skeleton height={135} />
      </div>
    ))}
  </div>
)

export default DeploymentSkeleton
