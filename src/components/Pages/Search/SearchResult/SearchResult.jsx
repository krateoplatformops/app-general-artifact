import React from 'react'
import { Link } from 'react-router-dom'

import css from './SearchResult.module.scss'
import Tag from '../../../UI/Tag/Tag'

const SearchResult = ({ r }) => (
  <Link className={css.Link} to={r.to}>
    <ul>
      <li className={css.LiIcon}>
        <i className={r.icon}></i>
      </li>
      <li className={css.LiInfo}>
        <div className={css.Name}>{r.name}</div>
        <div className={css.Secondary}>{r.description}</div>
        <div className={css.Tags}>
          {r.tags.map((t) => (
            <Tag tag={t} key={t} />
          ))}
        </div>
      </li>
      <li className={css.LiKind}>
        <span>
          {r.kind}
          <i className={r.kindIcon}></i>
        </span>
      </li>
    </ul>
  </Link>
)

export default SearchResult
