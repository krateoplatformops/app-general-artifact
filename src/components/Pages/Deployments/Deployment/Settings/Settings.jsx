import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import Card from '../../../../UI/Card/Card'
import DangerZone from '../../../../UI/DangerZone/DangerZone'
import { deploymentDelete } from '../../../../../redux/actions'

const Settings = ({ deploy }) => {
  const dispatch = useDispatch()
  const [showDangerZone, setShowDangerZone] = useState(false)

  const deleteDeploymentHandler = () => {
    setShowDangerZone(false)
    dispatch(
      deploymentDelete({
        apiVersion: deploy.apiVersion,
        kind: deploy.kind,
        name: deploy.metadata.name,
        uid: deploy.metadata.uid
      })
    )
  }

  return (
    <Card title={'Delete deployment'}>
      <button
        onClick={() => setShowDangerZone(true)}
        className="primary-button"
      >
        delete deployment
      </button>
      {showDangerZone && (
        <DangerZone
          title={'Delete deployment'}
          name={deploy.metadata.name}
          closeModal={() => setShowDangerZone(false)}
          deleteButtonHandler={deleteDeploymentHandler}
        />
      )}
    </Card>
  )
}

export default Settings
