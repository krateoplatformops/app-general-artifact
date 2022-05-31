import React from 'react'
import { connect } from 'react-redux'

import CounterCard from './CounterCard/CounterCard'
import css from './Dashboard.module.scss'
import EventsChart from './EventsChart/EventsChart'
import Loader from '../../UI/Loader/Loader'

const Dashboard = (props) => {
  return (
    <React.Fragment>
      <ul className={css.UlCards}>
        <li>
          <CounterCard
            title='Templates'
            counter={props.template.list?.length || 0}
            icon='fa-solid fa-puzzle-piece'
            color='Blue'
          />
        </li>
        <li>
          <CounterCard
            title='Deployments'
            counter={props.deployment.list?.length || 0}
            icon='fa-solid fa-rocket'
            color='Violet'
          />
        </li>
        <li>
          <CounterCard
            title='Users'
            counter={0}
            icon='fa-solid fa-user'
            color='Green'
          />
        </li>
        <li>
          <CounterCard
            title='Endpoints'
            counter={props.endpoint.list?.length || 0}
            icon='fa-solid fa-landmark'
            color='Orange'
          />
        </li>
      </ul>
      {!props.dashboard.list ? (
        <div className={css.LoaderContainer}>
          <Loader />
        </div>
      ) : (
        <ul className={css.UlCharts}>
          <li>
            <EventsChart data={(props.dashboard.list || []).events} />
          </li>
        </ul>
      )}
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Dashboard)
