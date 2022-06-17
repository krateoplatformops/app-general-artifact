import React from 'react'

import css from './PackageCard.module.scss'

const PackageCard = ({ p, catalog, openUpdateModal, openDeleteModal }) => {
  const info = (catalog.list || []).find(
    (x) => x.name.replace(/ +/g, '-') === p.name
  )

  const source = info?.source || p.source
  const maintainer = info?.maintainer || p.maintainer

  const updateHandler = () => {
    openUpdateModal({ current: p, future: info })
  }

  const deleteHandler = () => {
    openDeleteModal(p)
  }

  const status =
    p.healthy === 'Unknown'
      ? { css: 'Unknown', icon: 'fa-solid fa-question' }
      : p.healthy === 'True'
      ? { css: 'Healthy', icon: 'fa-solid fa-check' }
      : { css: 'Unhealthy', icon: 'fa-solid fa-triangle-exclamation' }

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
          <span
            className={`${css.Status} ${css[status.css]}`}
            title={`Healthy: ${p.healthy}`}
          >
            <i className={status.icon}></i>
          </span>
        </li>
        <li className={css.LiUpdate}>
          {info &&
            p.version !== info.version &&
            p.version !== 'latest' &&
            info.package && (
              <button className={css.BtnUpdate} onClick={updateHandler}>
                {info.version} <i className='fa-solid fa-upload'></i>
              </button>
            )}
          <button className={css.DeleteBtn} onClick={(e) => deleteHandler(e)}>
            <i className='fa-solid fa-trash-can'></i>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default PackageCard
