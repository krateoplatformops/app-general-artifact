import React from 'react'

import Card from '../../../../../UI/Card/Card'
import YamlView from '../../../../../UI/YamlView/YamlView'
import { pluginHelper } from '../../../../../../helpers'

const Capi = ({ content, deploy }) => (
  <Card>
    <YamlView
      data={pluginHelper.b64toAscii(content.content)}
      fileName={`${deploy.metadata.uid}-${content.name}`}
    />
  </Card>
)

export default Capi
