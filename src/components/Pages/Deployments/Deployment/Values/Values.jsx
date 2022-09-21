import React from 'react'

import Card from '../../../../UI/Card/Card'
import YamlView from '../../../../UI/YamlView/YamlView'

const Values = ({ deploy }) => {
  return (
    <React.Fragment>
      <Card title={'deployment.yaml'}>
        <YamlView
          data={deploy}
          fileName={`deployment-${deploy.metadata.uid}`}
        />
      </Card>
    </React.Fragment>
  )
}
export default Values
