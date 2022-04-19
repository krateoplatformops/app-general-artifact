import React from 'react'
import { connect } from 'react-redux'

import Log from './Log/Log'

const Events = ({ socket, deploy }) => (
  <React.Fragment>
    {socket.events
      .filter((x) => x.transactionId === deploy._id)
      .sort((a, b) => b.time - a.time)
      .map((log) => (
        <Log key={log._id} log={log} />
      ))}
  </React.Fragment>
)

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Events)
