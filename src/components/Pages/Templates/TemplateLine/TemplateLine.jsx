import React from 'react'

import Tag from '../../../UI/Tag/Tag'
import css from './TemplateLine.module.scss'

const TemplateLine = ({ t, go }) => (
  <div className={css.Container}>
    <div className={css.Card} onClick={() => go(t)}>
      <div className={css.Title}>{t.metadata.annotations.title}</div>
      <div className={css.Description}>
        {t.metadata.annotations.description}
      </div>
      <div className={css.Tags}>
        {t.metadata.labels.tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
        <Tag tag={`${t.spec.widgets.length} steps`} />
      </div>
      <div className={css.Footer}>
        <a
          target='_blank'
          href={t.url}
          rel='noreferrer'
          onClick={(e) => e.stopPropagation()}
        >
          <i className='fa-brands fa-git'></i>
        </a>
        <button className={css.DeleteBtn} onClick={(e) => e.stopPropagation()}>
          <i className='fa-solid fa-trash-can'></i>
        </button>
      </div>
    </div>
  </div>
)

export default TemplateLine
