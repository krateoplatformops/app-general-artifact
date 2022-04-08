import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import Loader from '../../../UI/Loader/Loader'
import Error from '../../../UI/Error/Error'
import {
  socketPull,
  socketSubscribe,
  socketUnsubscribe
} from '../../../../redux/actions'

import Menu from './Menu/Menu'
import Overview from './Overview/Overview'
import Events from './Events/Events'

import css from './Deployment.module.scss'
import SocketSpinner from '../../../UI/SocketSpinner/SocketSpinner'
import Resources from './Resources/Resources'

const Deployment = ({ deployment, socket }) => {
  const dispatch = useDispatch()
  const params = useParams()

  const deploy = (deployment.list || []).find((x) => x._id === params.id)

  useEffect(() => {
    dispatch(socketSubscribe(params.id))
    return () => dispatch(socketUnsubscribe(params.id))
  }, [dispatch, params.id])

  useEffect(() => {
    dispatch(socketPull({ transactionId: params.id }))
  }, [dispatch, params.id])

  if (!deploy) {
    if (deployment.loading) {
      return <Loader />
    } else if (deployment.result) {
      return <Error message={'Deployment not found'} />
    }
  }

  return (
    <React.Fragment>
      <h1>{deploy?.payload?.name}</h1>
      <Menu />

      {socket.subscriptions.indexOf(params.id) > -1 && (
        <div className={css.SocketActive}>
          <SocketSpinner />
        </div>
      )}

      <Routes>
        <Route path='/*'>
          <Route index element={<Overview deploy={deploy} />} />
          <Route path='resources' element={<Resources deploy={deploy} />} />
          <Route
            path='events'
            element={<Events deploy={deploy} transactionId={params.id} />}
          />
        </Route>
      </Routes>
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Deployment)
