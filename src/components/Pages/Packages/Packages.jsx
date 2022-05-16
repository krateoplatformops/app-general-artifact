import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'

import { pkgLoad } from '../../../redux/actions'
import LocalSearch from '../../UI/LocalSearch/LocalSearch'
import PackageCard from './PackageCard/PackageCard'
import PackageSkeleton from './PackageSkeleton/PackageSkeleton'

const Packages = ({ pkg }) => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')

  const reloadProviders = () => {
    dispatch(pkgLoad())
  }

  return (
    <React.Fragment>
      <h1>Packages</h1>
      <LocalSearch
        buttons={[
          {
            action: reloadProviders,
            icon: `fa-solid fa-rotate ${pkg.skeletonLoading && 'fa-spin'}`
          }
        ]}
      >
        <input
          type='text'
          placeholder='Search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </LocalSearch>

      {pkg.skeletonLoading && <PackageSkeleton />}

      {(pkg.list || [])
        .filter((x) => {
          return JSON.stringify(x).toLowerCase().indexOf(search) > -1
        })
        .map((p, key) => (
          <PackageCard p={p} key={key} />
        ))}
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Packages)
