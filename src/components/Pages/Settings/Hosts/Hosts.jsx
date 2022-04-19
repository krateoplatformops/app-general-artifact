import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'

import { hostLoad, hostCreate, hostDelete } from '../../../../redux/actions'
import LocalSearch from '../../../UI/LocalSearch/LocalSearch'
import HostCard from './HostCard/HostCard'
import DangerZone from '../../../UI/DangerZone/DangerZone'
import AddHost from './AddHost/AddHost'

const Hosts = ({ host }) => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)
  const [currentHost, setCurrentHost] = useState('')

  const reloadHostHandler = () => {
    dispatch(hostLoad())
  }

  const openAddModalHandler = () => {
    setShowAddModal(true)
  }

  const closeAddModalHandler = () => {
    setShowAddModal(false)
  }

  const openDeleteModalHandler = (h) => {
    setCurrentHost(h)
    setShowDeleteModal(true)
  }

  const closeDeleteModalHandler = () => {
    setShowDeleteModal(false)
  }

  const deleteHostHandler = () => {
    setShowDeleteModal(false)
    dispatch(hostDelete(currentHost._id))
  }

  const addHostHandler = (data) => {
    setShowAddModal(false)
    dispatch(hostCreate(data))
  }

  useEffect(() => {
    if (!host.result && !host.skeletonLoading) {
      dispatch(hostLoad())
    }
  }, [dispatch, host])

  return (
    <React.Fragment>
      <LocalSearch
        buttons={[
          { action: openAddModalHandler, icon: 'fa-solid fa-add' },
          { action: reloadHostHandler, icon: 'fa-solid fa-rotate' }
        ]}
      >
        <input
          type='text'
          placeholder='Search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </LocalSearch>

      {(host.list || [])
        .filter((x) => {
          return (
            x.provider.toLowerCase().indexOf(search) > -1 ||
            x.domain.toLowerCase().indexOf(search) > -1 ||
            x.secretName.toLowerCase().indexOf(search) > -1
          )
        })
        .map((h) => (
          <HostCard h={h} key={h._id} openModal={openDeleteModalHandler} />
        ))}

      {showAddModal && (
        <AddHost closeModal={closeAddModalHandler} addHost={addHostHandler} />
      )}

      {showDeleteModal && (
        <DangerZone
          title={'Delete host'}
          name={currentHost.secretName}
          closeModal={closeDeleteModalHandler}
          deleteButtonHandler={deleteHostHandler}
        />
      )}
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Hosts)
