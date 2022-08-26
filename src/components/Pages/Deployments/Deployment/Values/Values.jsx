import React from 'react'

import Card from '../../../../UI/Card/Card'
import YamlView from '../../../../UI/YamlView/YamlView'

const Values = ({ deploy }) => {
  return (
    <React.Fragment>
      <Card title={'claim.yaml'}>
        <YamlView data={deploy.claim} fileName="claim" />
      </Card>
    </React.Fragment>
  )
}
export default Values
