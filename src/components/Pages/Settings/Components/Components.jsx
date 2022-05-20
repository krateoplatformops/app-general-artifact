import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'

import LocalSearch from '../../../UI/LocalSearch/LocalSearch'
import { componentLoad } from '../../../../redux/actions'
import ComponentSkeleton from './ComponentSkeleton/ComponentSkeleton'
import ComponentCard from './ComponentCard/ComponentCard'
import packageJson from '../../../../../package.json'

const Components = ({ component }) => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')

  const reloadComponentHandler = () => {
    dispatch(componentLoad())
  }

  useEffect(() => {
    if (!component.result && !component.skeletonLoading) {
      dispatch(componentLoad())
    }
  }, [component, dispatch])

  return (
    <React.Fragment>
      <LocalSearch
        buttons={[
          {
            action: reloadComponentHandler,
            icon: `fa-solid fa-rotate ${component.skeletonLoading && 'fa-spin'}`
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

      {component.skeletonLoading && <ComponentSkeleton />}

      {[
        ...(component.list || []),
        { name: packageJson.name, version: packageJson.version, status: 200 }
      ]
        .sort((a, b) => a.name.localeCompare(b.name))
        .filter((x) => {
          return JSON.stringify(x).toLowerCase().indexOf(search) > -1
        })
        .map((c) => (
          <ComponentCard c={c} key={c.name} />
        ))}
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Components)
