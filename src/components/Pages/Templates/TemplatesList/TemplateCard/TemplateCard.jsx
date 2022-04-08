import React from 'react'

import Tag from '../../../../UI/Tag/Tag'
import css from './TemplateCard.module.scss'

const TemplateGrid = ({ t, go, cardMode, openModal }) => {
  const deleteHandler = (e) => {
    e.stopPropagation()
    openModal(t)
  }

  return (
    <div className={cardMode ? css.ContainerGrid : css.ContainerList}>
      <div className={css.Grid} onClick={() => go(t)}>
        <div className={cardMode ? css.TitleGrid : css.TitleList}>
          {t.metadata.annotations.title}
        </div>
        <div className={cardMode ? css.DescriptionGrid : css.DescriptionList}>
          {t.metadata.annotations.description}
        </div>
        <div className={cardMode ? css.FooterGrid : css.FooterList}>
          <div className={cardMode ? css.TagsGrid : css.TagsList}>
            {t.metadata.labels.tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
            <Tag tag={`${t.spec.widgets.length} widgets`} />
          </div>
          <div className={cardMode ? css.LinksGrid : css.LinksList}>
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
    </div>
  )
}

export default TemplateGrid
