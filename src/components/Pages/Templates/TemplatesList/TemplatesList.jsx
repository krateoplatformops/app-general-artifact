import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'

import {
  templateLoad,
  redirect,
  uiChangeTemplateViewMode,
  templateDelete
} from '../../../../redux/actions'
import LocalSearch from '../../../UI/LocalSearch/LocalSearch'
import DeleteTemplate from './DeleteTemplate/DeleteTemplate'
import TemplateCard from './TemplateCard/TemplateCard'
import css from './TemplatesList.module.scss'
import TemplateSkeleton from './TemplateSkeleton/TemplateSkeleton'

const TemplatesList = ({ template, ui }) => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [currentTemplate, setCurrentTemplate] = useState('')

  const changeViewMode = () => {
    dispatch(uiChangeTemplateViewMode())
  }

  const reloadTemplates = () => {
    dispatch(templateLoad())
  }

  const useTemplate = (t) => {
    dispatch(redirect(`/templates/${t._id}`))
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

  const cardMode = ui.templateViewMode === 'grid'

  return (
    <React.Fragment>
      <h1>Templates</h1>
      <LocalSearch
        buttons={[
          {
            action: changeViewMode,
            icon: cardMode ? 'fa-solid fa-grip' : 'fa-solid fa-bars'
          },
          { action: reloadTemplates, icon: 'fa-solid fa-rotate' }
        ]}
      >
        <input
          type='text'
          placeholder='Search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </LocalSearch>

      {template.skeletonLoading && <TemplateSkeleton cardMode={cardMode} />}

      <div className={css.TemplateList}>
        {(template.list || [])
          .filter((x) => {
            return (
              x.metadata.name.toLowerCase().indexOf(search) > -1 ||
              x.metadata.annotations.title.toLowerCase().indexOf(search) > -1 ||
              x.metadata.labels.tags.indexOf(search) > -1
            )
          })
          .map((t) => (
            <TemplateCard
              t={t}
              key={t._id}
              go={useTemplate}
              cardMode={cardMode}
              openModal={openDeleteModal}
            />
          ))}
      </div>
      {showModal && (
        <DeleteTemplate
          closeModal={closeDeleteModal}
          template={currentTemplate}
          deleteTemplateHandler={deleteTemplateHandler}
        />
      )}
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(TemplatesList)
