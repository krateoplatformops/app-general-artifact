import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'

import { proxyLoad, proxyCreate, proxyDelete } from '../../../../redux/actions'
import LocalSearch from '../../../UI/LocalSearch/LocalSearch'
import ProxyCard from './ProxyCard/ProxyCard'
import DangerZone from '../../../UI/DangerZone/DangerZone'
import AddProxy from './AddProxy/AddProxy'

const Proxy = ({ proxy }) => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)
  const [currentProxy, setCurrentProxy] = useState('')

  const reloadProxyHandler = () => {
    dispatch(proxyLoad())
  }

  const openAddModalHandler = () => {
    setShowAddModal(true)
  }

  const closeAddModalHandler = () => {
    setShowAddModal(false)
  }

  const openDeleteModalHandler = (h) => {
    setCurrentProxy(h)
    setShowDeleteModal(true)
  }

  const closeDeleteModalHandler = () => {
    setShowDeleteModal(false)
  }

  const deleteProxyHandler = () => {
    setShowDeleteModal(false)
    dispatch(proxyDelete(currentProxy._id))
  }

  const addProxyHandler = (data) => {
    setShowAddModal(false)
    dispatch(proxyCreate(data))
  }

  useEffect(() => {
    if (!proxy.result && !proxy.skeletonLoading) {
      dispatch(proxyLoad())
    }
  }, [dispatch, proxy])

  return (
    <React.Fragment>
      <LocalSearch
        buttons={[
          { action: openAddModalHandler, icon: 'fa-solid fa-add' },
          { action: reloadProxyHandler, icon: 'fa-solid fa-rotate' }
        ]}
      >
        <input
          type='text'
          placeholder='Search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </LocalSearch>

      {(proxy.list || [])
        .filter((x) => {
          return (
            x.base.toLowerCase().indexOf(search) > -1 ||
            x.target.toLowerCase().indexOf(search) > -1 ||
            x.secretName.toLowerCase().indexOf(search) > -1
          )
        })
        .map((p) => (
          <ProxyCard p={p} key={p._id} openModal={openDeleteModalHandler} />
        ))}

      {showAddModal && (
        <AddProxy
          closeModal={closeAddModalHandler}
          addProxy={addProxyHandler}
        />
      )}

      {showDeleteModal && (
        <DangerZone
          title={'Delete proxy'}
          name={currentProxy.secretName}
          closeModal={closeDeleteModalHandler}
          deleteButtonHandler={deleteProxyHandler}
        />
      )}
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Proxy)
