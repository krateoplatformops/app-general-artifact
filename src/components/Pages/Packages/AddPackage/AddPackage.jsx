import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import yaml from 'js-yaml'

import LocalSearch from '../../../UI/LocalSearch/LocalSearch'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { pkgLoad, catalogLoad, pkgAdd } from '../../../../redux/actions'
import Modal from '../../../UI/Modal/Modal'

import css from './AddPackage.module.scss'
import OfficialPackage from './OfficialPackage/OfficialPackage'

const AddPackage = ({ pkg, catalog }) => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [currentPackage, setCurrentPackage] = useState('')
  const [custom, setCustom] = useState('')

  const reloadProviders = () => {
    dispatch(pkgLoad())
    dispatch(catalogLoad())
  }

  const openModalCustom = () => {
    setCurrentPackage('')
    setShowModal(true)
  }

  const openUpdateModal = (p) => {
    setCurrentPackage(p)
    setShowModal(true)
  }

  const closeUpdateModal = () => {
    setShowModal(false)
    setCustom('')
  }

  const confirmButtonStatus = () => {
    if (currentPackage !== '') return false

    try {
      const y = yaml.load(custom)
      if (!y.kind || !y.apiVersion || !y.metadata || !y.spec) return true
      return false
    } catch {
      return true
    }
  }

  const addPackageHandler = () => {
    if (currentPackage !== '') {
      dispatch(
        pkgAdd({
          package: currentPackage.package,
          version: currentPackage.version
        })
      )
    } else {
      dispatch(
        pkgAdd({
          yaml: yaml.load(custom)
        })
      )
    }
    closeUpdateModal()
  }

  return (
    <React.Fragment>
      <h1>Add Package</h1>
      <LocalSearch
        buttons={[
          {
            action: openModalCustom,
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
        {pkg.skeletonLoading || catalog.skeletonLoading
          ? [...Array(6)].map((s, key) => (
              <li key={key}>
                <Skeleton height={210} />
              </li>
            ))
          : (catalog.list || [])
              .filter(
                (x) =>
                  !pkg.list.find((y) => x.name.replace(/ +/g, '-') === y.name)
              )
              .filter((x) => {
                return JSON.stringify(x).toLowerCase().indexOf(search) > -1
              })
              .map((p) => (
                <li key={p.name}>
                  <ul className={css.InstallCard}>
                    <li className={css.LiIcon}>
                      <img src={p.icon} alt={p.name} />
                    </li>
                    <li className={css.LiInfo}>
                      <span>Version: {p.version}</span>
                      <span>{p.name}</span>
                    </li>
                    <li className={css.Footer}>
                      <a href={p.source} target='_blank' rel='noreferrer'>
                        <i className='fa-brands fa-git'></i>
                      </a>
                      {p.package && (
                        <button onClick={() => openUpdateModal(p)}>
                          <i className='fa-solid fa-download'></i>
                        </button>
                      )}
                    </li>
                  </ul>
                </li>
              ))}
      </ul>

      {showModal && (
        <Modal
          title={`Add ${currentPackage === '' ? 'custom' : ''} package`}
          closeModal={closeUpdateModal}
          closeButtonHandler={closeUpdateModal}
          confirmButtonHandler={addPackageHandler}
          confirmButtonText={'Add package'}
          confirmDisabled={confirmButtonStatus()}
        >
          {currentPackage ? (
            <OfficialPackage p={currentPackage} />
          ) : (
            <textarea
              placeholder='Paste yaml code'
              onChange={(e) => setCustom(e.target.value)}
              value={custom}
            ></textarea>
          )}
        </Modal>
      )}
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(AddPackage)
