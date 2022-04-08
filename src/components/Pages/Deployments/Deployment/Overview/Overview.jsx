import React from 'react'

import Card from '../../../../UI/Card/Card'

const Overview = ({ deploy }) => {
  return (
    <Card title={deploy.payload.name}>
      {deploy.payload.description}
      {/* {Object.keys(deploy?.payload || []).map((x) => (
        <div key={x}>
          {x}: {deploy.payload[x]}
        </div>
      ))} */}
    </Card>
  )
}

export default Overview
