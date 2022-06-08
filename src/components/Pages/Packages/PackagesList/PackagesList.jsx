import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'

import { pkgLoad, pkgUpdate, catalogLoad } from '../../../../redux/actions'
import LocalSearch from '../../../UI/LocalSearch/LocalSearch'
import PackageCard from './PackageCard/PackageCard'
import css from './PackagesList.module.scss'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Modal from '../../../UI/Modal/Modal'
import UpdatePackage from './UpdatePackage/UpdatePackage'

const Packages = ({ pkg, catalog }) => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [currentPackage, setCurrentPackage] = useState('')

  const reloadProviders = () => {
    dispatch(pkgLoad())
    dispatch(catalogLoad())
  }

  const openUpdateModal = (p) => {
    setCurrentPackage(p)
    setShowModal(true)
  }

  const closeUpdateModal = () => {
    setShowModal(false)
  }

  const updatePackageHandler = () => {
    dispatch(
      pkgUpdate({
        package: currentPackage.future.package,
        version: currentPackage.future.version
      })
    )
    setShowModal(false)
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
                    openModal={openUpdateModal}
                  />
                </li>
              ))}
      </ul>
      {showModal && (
        <Modal
          title={'Update package'}
          closeModal={closeUpdateModal}
          closeButtonHandler={closeUpdateModal}
          confirmButtonHandler={updatePackageHandler}
          confirmButtonText={'Update'}
        >
          <UpdatePackage pkg={currentPackage} />
        </Modal>
      )}
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Packages)
