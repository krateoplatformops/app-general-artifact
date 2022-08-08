import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import {
  secretLoad,
  secretCreate,
  secretDelete
} from '../../../../redux/actions'
import LocalSearch from '../../../UI/LocalSearch/LocalSearch'
import AddSecret from './AddSecret/AddSecret'
import DangerZone from '../../../UI/DangerZone/DangerZone'
import SecretCard from './SecretCard/SecretCard'
import css from './Secrets.module.scss'

const Secrets = ({ secret, catalog }) => {
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
    dispatch(secretDelete(currentSecret.metadata.name))
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

      <ul className={css.UlCards}>
        {secret.skeletonLoading
          ? [...Array(8)].map((s, key) => (
              <li key={key}>
                <Skeleton height={135} />
              </li>
            ))
          : (secret.list || [])
              .filter((x) => {
                return JSON.stringify(x).toLowerCase().indexOf(search) > -1
              })
              .map((h) => (
                <li key={h._id}>
                  <SecretCard h={h} openModal={openDeleteModalHandler} />
                </li>
              ))}
      </ul>

      {showAddModal && (
        <AddSecret
          closeModal={closeAddModalHandler}
          addSecret={addSecretHandler}
          list={secret.list || []}
          catalog={catalog.list || []}
        />
      )}

      {showDeleteModal && (
        <DangerZone
          title={'Delete secret'}
          name={currentSecret.metadata.name}
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
