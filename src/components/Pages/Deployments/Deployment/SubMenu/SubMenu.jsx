import React, { useState, useEffect, useCallback } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import css from './SubMenu.module.scss'
import { uiConstants } from '../../../../../constants'
import {
  deploymentSingleLoad,
  logFetch,
  pluginFetch,
  registerImport
} from '../../../../../redux/actions'
import { pluginHelper } from '../../../../../helpers'

const SubMenu = ({ deploy }) => {
  const dispatch = useDispatch()
  const params = useParams()
  const [show, setShow] = useState(false)

  const repoSyncHandler = () => {
    dispatch(
      registerImport({
        url: `${deploy.repository}/claim.yaml`,
        endpointName: deploy.endpointName
      })
    )
    setShow(false)
  }

  const syncHandler = () => {
    const std = uiConstants.deploymentNav.find((x) => x.to === params['*'])

    if (std) {
      if (std.label === 'events') {
        dispatch(
          logFetch({ key: params.id, params: { deploymentId: params.id } })
        )
      } else {
        dispatch(deploymentSingleLoad({ _id: params.id }))
      }
    } else {
      const pp = deploy.claim.spec.dashboard.plugins.find(
        (x) => x.name.replace(/\s/g, '-') === params['*']
      )

      const pKey = pp ? `${pp.type}-${pp.name}` : null

      if (pKey) {
        dispatch(
          pluginFetch({
            url: pluginHelper.createCallUrl(pp),
            key: pKey
          })
        )
      }
    }
    setShow(false)
  }

  const handleClick = useCallback((e) => {
    if (!e.target.getAttribute('data-viewer')) {
      setShow()
      return
    }
  }, [])

  useEffect(() => {
    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [handleClick])

  return (
    <React.Fragment>
      <button
        type='button'
        className={css.Button}
        onClick={() => setShow(!show)}
        data-viewer={true}
      >
        <i className='fa-solid fa-ellipsis-vertical' data-viewer={true}></i>
      </button>
      {show && (
        <div className={css.SubMenu}>
          <button data-viewer={true} onClick={syncHandler}>
            <i className='fa-solid fa-sync-alt' data-viewer={true}></i> refresh
          </button>
          <button data-viewer={true} onClick={repoSyncHandler}>
            <i className='fa-solid fa-download' data-viewer={true}></i>
            sync with repository
          </button>
          <Link to={`/settings/endpoints`} data-viewer={true}>
            <i
              className={
                uiConstants.settingsNav.find((x) => x.to === 'endpoints').icon
              }
              data-viewer={true}
            ></i>{' '}
            go to endpoints
          </Link>
        </div>
      )}
    </React.Fragment>
  )
}

export default SubMenu
