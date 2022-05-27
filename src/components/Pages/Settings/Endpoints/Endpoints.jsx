import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import {
  endpointLoad,
  endpointCreate,
  endpointDelete
} from '../../../../redux/actions'
import LocalSearch from '../../../UI/LocalSearch/LocalSearch'
import EndpointCard from './EndpointCard/EndpointCard'
import DangerZone from '../../../UI/DangerZone/DangerZone'
import AddEndpoint from './AddEndpoint/AddEndpoint'
import css from './Endpoints.module.scss'

const Endpoints = ({ endpoint }) => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)
  const [currentEndpoint, setCurrentEndpoint] = useState('')

  const reloadEndpointHandler = () => {
    dispatch(endpointLoad())
  }

  const openAddModalHandler = () => {
    setShowAddModal(true)
  }

  const closeAddModalHandler = () => {
    setShowAddModal(false)
  }

  const openDeleteModalHandler = (h) => {
    setCurrentEndpoint(h)
    setShowDeleteModal(true)
  }

  const closeDeleteModalHandler = () => {
    setShowDeleteModal(false)
  }

  const deleteEndpointHandler = () => {
    setShowDeleteModal(false)
    dispatch(endpointDelete(currentEndpoint._id))
  }

  const addEndpointHandler = (data) => {
    setShowAddModal(false)
    dispatch(endpointCreate(data))
  }

  return (
    <React.Fragment>
      <LocalSearch
        buttons={[
          { action: openAddModalHandler, icon: 'fa-solid fa-add' },
          {
            action: reloadEndpointHandler,
            icon: `fa-solid fa-rotate ${endpoint.skeletonLoading && 'fa-spin'}`
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
        {endpoint.skeletonLoading
          ? [...Array(8)].map((s, key) => (
              <li key={key}>
                <Skeleton height={135} />
              </li>
            ))
          : (endpoint.list || [])
              .filter((x) => {
                return JSON.stringify(x).toLowerCase().indexOf(search) > -1
              })
              .map((h) => (
                <li key={h._id}>
                  <EndpointCard h={h} openModal={openDeleteModalHandler} />
                </li>
              ))}
      </ul>

      {showAddModal && (
        <AddEndpoint
          closeModal={closeAddModalHandler}
          addEndpoint={addEndpointHandler}
          list={endpoint.list}
        />
      )}

      {showDeleteModal && (
        <DangerZone
          title={'Delete endpoint'}
          name={currentEndpoint.secretName}
          closeModal={closeDeleteModalHandler}
          deleteButtonHandler={deleteEndpointHandler}
        />
      )}
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Endpoints)
