import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { templateLoad, redirect } from '../../../redux/actions'
import LocalSearch from '../../UI/LocalSearch/LocalSearch'
import TemplateCard from './TemplateCard/TemplateCard'
import TemplateLine from './TemplateLine/TemplateLine'
import css from './Templates.module.scss'

const Templates = ({ template }) => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const [cardMode, setCardMode] = useState(true)

  const changeViewMode = () => {
    setCardMode(!cardMode)
  }

  const reloadTemplates = () => {
    dispatch(templateLoad())
  }

  const useTemplate = (t) => {
    dispatch(redirect(`/templates/${t._id}`))
  }

  useEffect(() => {
    if (!template.result && !template.loading) {
      dispatch(templateLoad())
    }
  }, [dispatch, template])

  return (
    <React.Fragment>
      <h1>Templates</h1>
      <LocalSearch
        buttons={[
          { action: changeViewMode, icon: 'fa-solid fa-table-cells-large' },
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

      {template.loading && (
        <div className={css.Skeleton}>
          {[...Array(4)].map((s, key) => (
            <div key={key}>
              <Skeleton height={200} />
            </div>
          ))}
        </div>
      )}
      <div className={css.TemplateList}>
        {
          (template.list || [])
            .filter((x) => {
              return (
                x.metadata.name.toLowerCase().indexOf(search) > -1 ||
                x.metadata.annotations.title.toLowerCase().indexOf(search) >
                  -1 ||
                x.metadata.labels.tags.indexOf(search) > -1
              )
            })
            .map((t) =>
              cardMode ? (
                <TemplateCard t={t} key={t._id} go={useTemplate} />
              ) : (
                <TemplateLine t={t} key={t._id} go={useTemplate} />
              )
            )
          // .map((t) => {
          //   return cardMode ? (
          //     <TemplateCard t={t} key={t._id} />
          //   ) : (
          //     <TemplateLine t={t} key={t._id} />
          //   )
          // })
        }
      </div>
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Templates)
