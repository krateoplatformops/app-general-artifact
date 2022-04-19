import React from 'react'
import { Link } from 'react-router-dom'

import Tag from '../../../../UI/Tag/Tag'
import css from './TemplateCard.module.scss'

const TemplateGrid = ({ t, openModal }) => {
  const deleteHandler = (e) => {
    e.stopPropagation()
    openModal(t)
  }

  return (
    <div className={css.TemplateContainer}>
      <div className={css.TemplateCard}>
        <Link to={`/templates/${t._id}`} className={css.UseLink}>
          <ul className={css.UlHeader}>
            <li className={css.LiIcon}>
              <i className={t.metadata.annotations.icon}></i>
            </li>
            <li className={css.LiTitle}>{t.metadata.annotations.title}</li>
          </ul>
          <div className={css.Description}>
            {t.metadata.annotations.description}
          </div>
          <div className={css.Tags}>
            {t.metadata.labels.tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
            <Tag tag={`${t.spec.widgets.length} widgets`} />
          </div>
        </Link>
        <div className={css.Links}>
          <a
            target='_blank'
            href={t.url}
            rel='noreferrer'
            onClick={(e) => e.stopPropagation()}
            className={css.Link}
          >
            <i className='fa-brands fa-git'></i>
          </a>
          <button className={css.DeleteBtn} onClick={(e) => deleteHandler(e)}>
            <i className='fa-solid fa-trash-can'></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TemplateGrid
