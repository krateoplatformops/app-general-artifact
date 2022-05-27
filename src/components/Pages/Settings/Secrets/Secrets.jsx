import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'

import {
  secretLoad,
  secretCreate,
  secretDelete
} from '../../../../redux/actions'
import LocalSearch from '../../../UI/LocalSearch/LocalSearch'
import AddSecret from './AddSecret/AddSecret'
import DangerZone from '../../../UI/DangerZone/DangerZone'
// import SecretSkeleton from './SecretSkeleton/SecretSkeleton'

const Secrets = ({ secret }) => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)
  const [currentSecret, setCurrentSecret] = useState('')

  const reloadSecretHandler = () => {
    dispatch(secretLoad())
  }

  const openAddModalHandler = () => {
    setShowAddModal(true)
  }

  const closeAddModalHandler = () => {
    setShowAddModal(false)
  }

  const openDeleteModalHandler = (h) => {
    setCurrentSecret(h)
    setShowDeleteModal(true)
  }

  const closeDeleteModalHandler = () => {
    setShowDeleteModal(false)
  }

  const deleteSecretHandler = () => {
    setShowDeleteModal(false)
    dispatch(secretDelete(currentSecret._id))
  }

  const addSecretHandler = (data) => {
    setShowAddModal(false)
    dispatch(secretCreate(data))
  }

  return (
    <React.Fragment>
      <LocalSearch
        buttons={[
          { action: openAddModalHandler, icon: 'fa-solid fa-add' },
          {
            action: reloadSecretHandler,
            icon: `fa-solid fa-rotate ${secret.skeletonLoading && 'fa-spin'}`
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

      {showAddModal && (
        <AddSecret
          closeModal={closeAddModalHandler}
          addSecret={addSecretHandler}
          list={secret.list}
        />
      )}

      {showDeleteModal && (
        <DangerZone
          title={'Delete secret'}
          name={currentSecret.secretName}
          closeModal={closeDeleteModalHandler}
          deleteButtonHandler={deleteSecretHandler}
        />
      )}
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Secrets)
