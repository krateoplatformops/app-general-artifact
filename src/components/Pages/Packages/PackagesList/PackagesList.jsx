import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'

import {
  pkgLoad,
  pkgUpdate,
  catalogLoad,
  pkgDelete
} from '../../../../redux/actions'
import LocalSearch from '../../../UI/LocalSearch/LocalSearch'
import PackageCard from './PackageCard/PackageCard'
import css from './PackagesList.module.scss'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Modal from '../../../UI/Modal/Modal'
import UpdatePackage from './UpdatePackage/UpdatePackage'
import DangerZone from '../../../UI/DangerZone/DangerZone'

const Packages = ({ pkg, catalog }) => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [currentPackage, setCurrentPackage] = useState('')

  const reloadProviders = () => {
    dispatch(pkgLoad())
    dispatch(catalogLoad())
  }

  const openUpdateModal = (p) => {
    setCurrentPackage(p)
    setShowUpdateModal(true)
  }

  const openDeleteModal = (p) => {
    setCurrentPackage(p)
    setShowDeleteModal(true)
  }

  const updatePackageHandler = () => {
    dispatch(
      pkgUpdate({
        package: currentPackage.future.package,
        version: currentPackage.future.version
      })
    )
    setShowUpdateModal(false)
  }

  const deletePackageHandler = () => {
    dispatch(pkgDelete(currentPackage))
    setShowDeleteModal(false)
  }

  return (
    <React.Fragment>
      <h1>Packages</h1>
      <LocalSearch
        buttons={[
          {
            to: '/packages/new',
            icon: 'fa-solid fa-add'
          },
          {
            action: reloadProviders,
            icon: `fa-solid fa-rotate ${
              (pkg.skeletonLoading || catalog.loading) && 'fa-spin'
            }`
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
        {pkg.skeletonLoading
          ? [...Array(4)].map((s, key) => (
              <li key={key}>
                <Skeleton height={175} />
              </li>
            ))
          : (pkg.list || [])
              .filter((x) => {
                return JSON.stringify(x).toLowerCase().indexOf(search) > -1
              })
              .map((p) => (
                <li key={p.name}>
                  <PackageCard
                    p={p}
                    catalog={catalog}
                    openUpdateModal={openUpdateModal}
                    openDeleteModal={openDeleteModal}
                  />
                </li>
              ))}
      </ul>
      {showUpdateModal && (
        <Modal
          title={'Update package'}
          closeModal={() => setShowUpdateModal(false)}
          closeButtonHandler={() => setShowUpdateModal(false)}
          confirmButtonHandler={updatePackageHandler}
          confirmButtonText={'Update'}
        >
          <UpdatePackage pkg={currentPackage} />
        </Modal>
      )}
      {showDeleteModal && (
        <DangerZone
          title={'Delete package'}
          name={currentPackage.name}
          closeModal={() => setShowDeleteModal(false)}
          deleteButtonHandler={deletePackageHandler}
        />
      )}
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Packages)
