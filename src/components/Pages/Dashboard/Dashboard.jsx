import React from 'react'
import { connect } from 'react-redux'

const Dashboard = (props) => {
  return (
    <React.Fragment>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(props.socket.subscriptions, null, 2)}</pre>
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Dashboard)
