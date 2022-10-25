import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import LocalSearch from '../../../UI/LocalSearch/LocalSearch'
import StrategyCard from './StrategyCard/StrategyCard'
import AddStrategy from './AddStrategy/AddStrategy'
import {
  strategyLoad,
  strategyCreate,
  strategyDelete
} from '../../../../redux/actions'
import DangerZone from '../../../UI/DangerZone/DangerZone'
import css from './Authentication.module.scss'

const Authentication = ({ strategy }) => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)
  const [currentStrategy, setCurrentStrategy] = useState('')

  const reloadStrategyHandler = () => {
    dispatch(strategyLoad())
  }

  const openAddModalHandler = () => {
    setShowAddModal(true)
  }

  const closeAddModalHandler = () => {
    setShowAddModal(false)
  }

  const openDeleteModalHandler = (s) => {
    setCurrentStrategy(s)
    setShowDeleteModal(true)
  }

  const closeDeleteModalHandler = () => {
    setShowDeleteModal(false)
  }

  const deleteStrategyHandler = () => {
    setShowDeleteModal(false)
    dispatch(strategyDelete(currentStrategy))
  }

  const addStrategyHandler = (data) => {
    setShowAddModal(false)
    dispatch(strategyCreate(data))
  }

  return (
    <React.Fragment>
      <LocalSearch
        buttons={[
          { action: openAddModalHandler, icon: 'fa-solid fa-add' },
          {
            action: reloadStrategyHandler,
            icon: `fa-solid fa-rotate ${false && 'fa-spin'}`
          }
        ]}
      >
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </LocalSearch>

      <ul className={css.UlCards}>
        {strategy.skeletonLoading
          ? [...Array(8)].map((s, key) => (
              <li key={key}>
                <Skeleton height={135} />
              </li>
            ))
          : (strategy.list || [])
              .filter((x) => {
                return JSON.stringify(x).toLowerCase().indexOf(search) > -1
              })
              .map((s) => (
                <li key={s.metadata.uid}>
                  <StrategyCard
                    s={s.spec}
                    name={s.metadata.name}
                    openModal={openDeleteModalHandler}
                  />
                </li>
              ))}
      </ul>

      {showAddModal && (
        <AddStrategy
          closeModal={closeAddModalHandler}
          addStrategy={addStrategyHandler}
          list={strategy.list}
        />
      )}

      {showDeleteModal && (
        <DangerZone
          title={'Delete strategy'}
          name={currentStrategy}
          closeModal={closeDeleteModalHandler}
          deleteButtonHandler={deleteStrategyHandler}
        />
      )}
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Authentication)
