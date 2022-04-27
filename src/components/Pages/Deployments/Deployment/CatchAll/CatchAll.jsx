import React from 'react'

import Error from '../../../../UI/Error/Error'
import Documentation from './Documentation/Documentation'

const CatchAll = ({ deploy, params }) => {
  const plugin = deploy.claim.spec.dashboard.plugins.find(
    (x) => x.name.replace(/\s/g, '-') === params['*']
  )

  switch (plugin.type) {
    case 'doc':
      return <Documentation plugin={plugin} deploy={deploy} />
    default:
      return <Error message={`Unsupported plugin type: ${plugin.type}`} />
  }
}

export default CatchAll
