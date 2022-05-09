import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'

import { templateLoad, templateDelete } from '../../../../redux/actions'
import LocalSearch from '../../../UI/LocalSearch/LocalSearch'
import TemplateCard from './TemplateCard/TemplateCard'
import css from './TemplatesList.module.scss'
import TemplateSkeleton from './TemplateSkeleton/TemplateSkeleton'
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

      {template.skeletonLoading && <TemplateSkeleton />}

      <div className={css.TemplateList}>
        {(template.list || [])
          .filter((x) => {
            return (
              x.metadata.name.toLowerCase().indexOf(search) > -1 ||
              x.metadata.annotations.title.toLowerCase().indexOf(search) > -1 ||
              x.metadata.labels.tags.some(
                (tag) => tag.toLowerCase().indexOf(search) > -1
              )
            )
          })
          .map((t) => (
            <TemplateCard t={t} key={t._id} openModal={openDeleteModal} />
          ))}
      </div>
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
