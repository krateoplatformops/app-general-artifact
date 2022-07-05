import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import Card from '../../../../UI/Card/Card'
import DangerZone from '../../../../UI/DangerZone/DangerZone'
import { deploymentDelete } from '../../../../../redux/actions'
// import css from './Settings.module.scss'

const Settings = ({ deploy }) => {
  const dispatch = useDispatch()
  const [showDangerZone, setShowDangerZone] = useState(false)

  const deleteDeploymentHandler = () => {
    setShowDangerZone(false)
    dispatch(deploymentDelete(deploy._id))
  }

  return (
    <Card title={'Delete deployment'}>
      <button
        onClick={() => setShowDangerZone(true)}
        className='primary-button'
      >
        delete deployment
      </button>
      {showDangerZone && (
        <DangerZone
          title={'Delete deployment'}
          name={deploy.claim.metadata.name}
          closeModal={() => setShowDangerZone(false)}
          deleteButtonHandler={deleteDeploymentHandler}
        />
      )}
    </Card>
  )
}

export default Settings
