import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'

import {
  endpointLoad,
  endpointCreate,
  endpointDelete
} from '../../../../redux/actions'
import LocalSearch from '../../../UI/LocalSearch/LocalSearch'
import EndpointCard from './EndpointCard/EndpointCard'
import DangerZone from '../../../UI/DangerZone/DangerZone'
import AddEndpoint from './AddEndpoint/AddEndpoint'

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
          { action: reloadEndpointHandler, icon: 'fa-solid fa-rotate' }
        ]}
      >
        <input
          type='text'
          placeholder='Search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </LocalSearch>

      {(endpoint.list || [])
        .filter((x) => {
          return (
            x.name.toLowerCase().indexOf(search) > -1 ||
            x.target.toLowerCase().indexOf(search) > -1
          )
        })
        .map((h) => (
          <EndpointCard h={h} key={h._id} openModal={openDeleteModalHandler} />
        ))}

      {showAddModal && (
        <AddEndpoint
          closeModal={closeAddModalHandler}
          addEndpoint={addEndpointHandler}
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
