import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'

import { providerLoad } from '../../../redux/actions'
import LocalSearch from '../../UI/LocalSearch/LocalSearch'
import ProviderCard from './ProviderCard/ProviderCard'
import ProviderSkeleton from './ProviderSkeleton/ProviderSkeleton'

const Providers = ({ provider }) => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')

  const reloadProviders = () => {
    dispatch(providerLoad())
  }

  return (
    <React.Fragment>
      <h1>Providers</h1>
      <LocalSearch
        buttons={[
          {
            action: reloadProviders,
            icon: `fa-solid fa-rotate ${provider.skeletonLoading && 'fa-spin'}`
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

      {provider.skeletonLoading && <ProviderSkeleton />}

      {(provider.list || [])
        .filter((x) => {
          return (
            x.metadata.name.toLowerCase().indexOf(search) > -1 ||
            x.metadata.annotations['meta.crossplane.io/keywords']
              .toLowerCase()
              .indexOf(search) > -1 ||
            x.metadata.annotations['meta.crossplane.io/description']
              .toLowerCase()
              .indexOf(search) > -1 ||
            x.metadata.annotations['meta.crossplane.io/maintainer']
              .toLowerCase()
              .indexOf(search) > -1
          )
        })
        .map((p, key) => (
          <ProviderCard p={p} key={key} />
        ))}
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Providers)
