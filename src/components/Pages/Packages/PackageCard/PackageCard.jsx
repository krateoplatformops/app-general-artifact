import React from 'react'

import css from './PackageCard.module.scss'
// import Tag from '../../../UI/Tag/Tag'

const PackageCard = ({ p }) => (
  <div className={css.Container}>
    <ul className={css.UlPkg}>
      <li className={css.LiIcon}>
        <img src={p.icon} alt={p.name} />
      </li>
      <li className={css.LiInfo}>
        <span className={css.Kind}>{p.kind}</span>
        <span className={css.Name}>{p.name}</span>
        {p.description}
        <ul className={css.UlFooter}>
          {p.metadata.map((m) => (
            <li key={m.label}>
              {m.label}:<b>{m.value}</b>
            </li>
          ))}
        </ul>
        {/* <div className={css.Tags}>
          {p.metadata.annotations['meta.crossplane.io/keywords']
            .split(',')
            .map((t) => (
              <Tag tag={t} key={t} />
            ))}
        </div>{ */}
      </li>
    </ul>
  </div>
)

export default PackageCard
