import React from 'react'

import css from './PackageCard.module.scss'

const PackageCard = ({ p, catalog, openModal }) => {
  const info = (catalog.list || []).find(
    (x) => x.name.replace(/ +/g, '-') === p.name
  )

  const source = info?.source || p.source
  const maintainer = info?.maintainer || p.maintainer

  const updateHandler = () => {
    openModal({ current: p, future: info })
  }

  return (
    <div className={css.Card}>
      <ul className={css.UlPkg}>
        <li className={css.LiIcon}>
          <img src={info?.icon || p.icon} alt={p.name} />
        </li>
        <li className={css.LiInfo}>
          <span className={css.Kind}>{p.kind}</span>
          <span className={css.Name}>{p.name}</span>
          {info?.description || p.description}
          <ul className={css.UlFooter}>
            {source && (
              <li>
                <b>source</b>
                <a href={source} target='_blank' rel='noreferrer'>
                  {source}
                </a>
              </li>
            )}
            {maintainer && (
              <li>
                <b>maintainer</b>
                {maintainer}
              </li>
            )}
          </ul>
        </li>
      </ul>
      <ul className={css.UlVersion}>
        <li className={css.LiCurrent}>
          <span className={css.CurVersion}>{p.version}</span>
        </li>
        <li className={css.LiUpdate}>
          {info &&
            p.version !== info.version &&
            p.version !== 'latest' &&
            info.package && (
              <button className={css.BtnUpdate} onClick={updateHandler}>
                {info.version} <i className='fa-solid fa-download'></i>
              </button>
            )}
        </li>
      </ul>
    </div>
  )
}

export default PackageCard
