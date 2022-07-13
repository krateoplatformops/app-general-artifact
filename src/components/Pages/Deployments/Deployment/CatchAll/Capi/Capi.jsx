import React from 'react'
import yaml from 'js-yaml'

import Card from '../../../../../UI/Card/Card'
import YamlView from '../../../../../UI/YamlView/YamlView'

const Capi = ({ content, deploy }) => (
  <Card>
    <YamlView
      yaml={yaml.dump(content.content)}
      fileName={`${deploy._id}-config`}
    />
  </Card>
)

export default Capi
