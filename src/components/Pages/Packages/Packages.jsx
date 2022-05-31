import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'

import { pkgLoad } from '../../../redux/actions'
import LocalSearch from '../../UI/LocalSearch/LocalSearch'
import PackageCard from './PackageCard/PackageCard'
import css from './Packages.module.scss'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Packages = ({ pkg, catalog }) => {
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
            to: '/packages/new',
            icon: 'fa-solid fa-add'
          },
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

      <ul className={css.UlCards}>
        {pkg.skeletonLoading
          ? [...Array(4)].map((s, key) => (
              <li key={key}>
                <Skeleton height={150} />
              </li>
            ))
          : (pkg.list || [])
              .filter((x) => {
                return JSON.stringify(x).toLowerCase().indexOf(search) > -1
              })
              .map((p) => (
                <li key={p.name}>
                  <PackageCard p={p} catalog={catalog} />
                </li>
              ))}
      </ul>
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Packages)
