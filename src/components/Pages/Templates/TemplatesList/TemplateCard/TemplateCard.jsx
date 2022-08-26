import React from 'react'
import { Link } from 'react-router-dom'

import Tag from '../../../../UI/Tag/Tag'
import css from './TemplateCard.module.scss'

const TemplateGrid = ({ t, openModal, refreshButtonHandler }) => {
  const deleteHandler = (e) => {
    e.stopPropagation()
    openModal(t)
  }

  const refreshHandler = (e) => {
    e.stopPropagation()
    refreshButtonHandler(t)
  }

  return (
    <div className={css.TemplateCard}>
      <Link
        to={`/templates/${t.metadata.uid}`}
        className={`${css.UseLink} ${
          (t.spec?.widgets || []).length === 0 ? css.DisabledLink : ''
        }`}
      >
        <ul className={css.UlHeader}>
          <li className={css.LiIcon}>
            <i className={t.spec.icon}></i>
          </li>
          <li className={css.LiTitle}>{t.spec.title}</li>
        </ul>
        <div className={css.Description}>{t.spec.description}</div>
        <div className={css.Tags}>
          {(t.spec.tags || []).map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
          <Tag tag={`${(t.spec?.widgets || []).length} widgets`} />
        </div>
      </Link>
      <div className={css.Links}>
        <a
          target="_blank"
          href={t.spec.url}
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className={css.Link}
        >
          <i className="fa-brands fa-git"></i>
        </a>
        <span className={css.SpanButtons} onClick={(e) => refreshHandler(e)}>
          <button className={css.SyncBtn} title="Refresh template">
            <i className="fa-solid fa-rotate"></i>
          </button>
          <button className={css.DeleteBtn} onClick={(e) => deleteHandler(e)}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </span>
      </div>
    </div>
  )
}

export default TemplateGrid
