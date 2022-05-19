import React, { useEffect, Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import Loader from '../../../UI/Loader/Loader'
import Error from '../../../UI/Error/Error'
import { socketSubscribe, socketUnsubscribe } from '../../../../redux/actions'

import Menu from './Menu/Menu'

import css from './Deployment.module.scss'
import SocketSpinner from '../../../UI/SocketSpinner/SocketSpinner'
import PageLoader from '../../../UI/PageLoader/PageLoader'
// import SubMenu from './SubMenu/SubMenu'

const ValuesLazy = lazy(() => import('./Values/Values'))
const EventsLazy = lazy(() => import('./Events/Events'))
const SettingsLazy = lazy(() => import('./Settings/Settings'))
const OverviewLazy = lazy(() => import('./Overview/Overview'))
const CatchAllLazy = lazy(() => import('./CatchAll/CatchAll'))

const Deployment = ({ deployment, socket }) => {
  const dispatch = useDispatch()
  const params = useParams()

  const deploy = (deployment.list || []).find((x) => x._id === params.id)

  useEffect(() => {
    if (!socket.error) {
      dispatch(socketSubscribe(params.id))
    }
    return () => {
      if (!socket.error) {
        dispatch(socketUnsubscribe(params.id))
      }
    }
  }, [dispatch, params.id, socket.error])

  if (!deploy) {
    if (deployment.loading) {
      return <Loader />
    } else if (deployment.result) {
      return <Error message={'Deployment not found'} />
    }
  } else {
    return (
      <React.Fragment>
        <div className={css.Title}>{deploy.claim.spec.name}</div>
        {/* <SubMenu deploy={deploy} /> */}
        <Menu deploy={deploy} />
        {socket.subscriptions.indexOf(params.id) > -1 && (
          <div className={css.SocketActive}>
            <SocketSpinner />
          </div>
        )}
        <div>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path='/*'>
                <Route index element={<OverviewLazy deploy={deploy} />} />
                <Route path='events' element={<EventsLazy deploy={deploy} />} />
                <Route path='values' element={<ValuesLazy deploy={deploy} />} />
                <Route
                  path='settings'
                  element={<SettingsLazy deploy={deploy} />}
                />
                <Route
                  path='*'
                  element={<CatchAllLazy deploy={deploy} params={params} />}
                />
              </Route>
            </Routes>
          </Suspense>
        </div>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Deployment)
