import React from 'react'
import yaml from 'js-yaml'

import Card from '../../../../UI/Card/Card'
import YamlView from '../../../../UI/YamlView/YamlView'

const Values = ({ deploy }) => {
  return (
    <React.Fragment>
      <Card title={'claim.yaml'}>
        <YamlView yaml={yaml.dump(deploy.claim)} fileName='claim' />
      </Card>
    </React.Fragment>
  )
}
export default Values
