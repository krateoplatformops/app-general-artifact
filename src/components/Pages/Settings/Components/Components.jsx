import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import LocalSearch from '../../../UI/LocalSearch/LocalSearch'
import { componentLoad } from '../../../../redux/actions'
import ComponentCard from './ComponentCard/ComponentCard'
import packageJson from '../../../../../package.json'

import css from './Components.module.scss'

const Components = ({ component }) => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')

  const reloadComponentHandler = () => {
    dispatch(componentLoad())
  }

  const componentsList = () => {
    if (component.skeletonLoading || !component.list) return []

    return [
      ...component.list,
      {
        name: packageJson.name,
        version: packageJson.version,
        status: 200,
        statusText: 'OK'
      }
    ]
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

      <ul className={css.UlCards}>
        {component.skeletonLoading
          ? [...Array(8)].map((s, key) => (
              <li key={key}>
                <Skeleton height={135} />
              </li>
            ))
          : componentsList()
              .sort((a, b) => a.name.localeCompare(b.name))
              .filter((x) => {
                return JSON.stringify(x).toLowerCase().indexOf(search) > -1
              })
              .map((c) => (
                <li key={c.name}>
                  <ComponentCard c={c} />
                </li>
              ))}
      </ul>
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Components)
