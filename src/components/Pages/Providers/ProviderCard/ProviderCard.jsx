import React from 'react'

import css from './ProviderCard.module.scss'
import Tag from '../../../UI/Tag/Tag'

const ProviderCard = ({ p }) => (
  <div className={css.Container}>
    <ul className={css.UlProvider}>
      <li className={css.LiIcon}>
        <img
          src={p.metadata.annotations['meta.crossplane.io/iconURI']}
          alt={p.metadata.name}
        />
      </li>
      <li className={css.LiInfo}>
        <span className={css.Kind}>{p.kind}</span>
        <span className={css.Name}>{p.metadata.name}</span>
        {p.metadata.annotations['meta.crossplane.io/description']}
        <ul className={css.UlFooter}>
          <li>
            Maintainer:
            <b>{p.metadata.annotations['meta.crossplane.io/maintainer']}</b>
          </li>
        </ul>
        <ul className={css.UlFooter}>
          <li>
            Source:
            <b>{p.metadata.annotations['meta.crossplane.io/source']}</b>
          </li>
          <li>
            License:
            <b>{p.metadata.annotations['meta.crossplane.io/license']}</b>
          </li>
        </ul>
        <div className={css.Tags}>
          {p.metadata.annotations['meta.crossplane.io/keywords']
            .split(',')
            .map((t) => (
              <Tag tag={t} key={t} />
            ))}
        </div>
      </li>
    </ul>
  </div>
)

export default ProviderCard
