import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import {
  templateLoad,
  templateDelete,
  templateCreate
} from '../../../../redux/actions'
import LocalSearch from '../../../UI/LocalSearch/LocalSearch'
import TemplateCard from './TemplateCard/TemplateCard'
import css from './TemplatesList.module.scss'
import DangerZone from '../../../UI/DangerZone/DangerZone'

const TemplatesList = ({ template }) => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [currentTemplate, setCurrentTemplate] = useState('')

  const reloadTemplates = () => {
    dispatch(templateLoad())
  }

  const openDeleteModal = (t) => {
    setCurrentTemplate(t)
    setShowModal(true)
  }

  const closeDeleteModal = () => {
    setShowModal(false)
  }

  const deleteTemplateHandler = () => {
    setShowModal(false)
    dispatch(templateDelete(currentTemplate._id))
  }

  const refreshTemplateHandler = (t) => {
    dispatch(templateCreate({ url: t.url, endpointName: t.endpointName }))
  }

  return (
    <React.Fragment>
      <h1>Templates</h1>
      <LocalSearch
        buttons={[
          {
            action: reloadTemplates,
            icon: `fa-solid fa-rotate ${template.skeletonLoading && 'fa-spin'}`
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
        {template.skeletonLoading
          ? [...Array(4)].map((s, key) => (
              <li key={key}>
                <Skeleton height={270} />
              </li>
            ))
          : (template.list || [])
              .filter((x) => {
                return JSON.stringify(x).toLowerCase().indexOf(search) > -1
              })
              .map((t, key) => (
                <li key={key}>
                  <TemplateCard
                    t={t}
                    openModal={openDeleteModal}
                    refreshButtonHandler={refreshTemplateHandler}
                  />
                </li>
              ))}
      </ul>

      {showModal && (
        <DangerZone
          title={'Delete template'}
          name={currentTemplate.metadata.name}
          closeModal={closeDeleteModal}
          deleteButtonHandler={deleteTemplateHandler}
        />
      )}
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(TemplatesList)
