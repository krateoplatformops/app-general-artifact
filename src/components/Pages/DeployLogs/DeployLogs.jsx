import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import BusinessError from '../../UI/BusinessError/BusinessError'
import { socketSubscribe } from '../../../redux/actions'

const DeployLogs = (props) => {
  const dispatch = useDispatch()
  const params = useParams()

  const template = (props.template.list || []).find((x) => x._id === params.id)

  useEffect(() => {
    dispatch(socketSubscribe(params.transactionId))
  }, [dispatch, params.transactionId])

  if (!template) {
    return <BusinessError message={'Template not found'} />
  } else {
    return (
      <React.Fragment>
        <h1 className='mb'>{template.metadata.annotations.title}</h1>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(DeployLogs)
