import React from 'react'

import Card from '../../../../../UI/Card/Card'
import YamlView from '../../../../../UI/YamlView/YamlView'

const Capi = ({ content, deploy }) => (
  <Card>
    <YamlView data={content.claim} fileName={`${deploy._id}-config`} />
  </Card>
)

export default Capi
