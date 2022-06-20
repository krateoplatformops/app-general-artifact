import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import css from './Actions.module.scss'
import Endpoint from '../../../../assets/dashboard/endpoint.svg'
import Template from '../../../../assets/dashboard/template.svg'
import Deployment from '../../../../assets/dashboard/deployment.svg'

const Actions = ({ endpoint, template, deployment }) => (
  <div className={css.Container}>
    <div className={css.Title}>action needed</div>
    <ul className={css.UlList}>
      <li {...((endpoint.list || []).length > 1 && { 'data-completed': true })}>
        <img src={Endpoint} alt='Add Endpoint' />
        <Link to='/settings/endpoints' className={css.Link}>
          add endpoint
        </Link>
      </li>
      <li
        {...((endpoint.list || []).length <= 1 && { disabled: true })}
        {...((template.list || []).length > 0 && { 'data-completed': true })}
      >
        <img src={Template} alt='Import Template' />
        <Link to='/register' className={css.Link}>
          import template
        </Link>
      </li>
      <li
        {...((template.list || []).length === 0 && { disabled: true })}
        {...((deployment.list || []).length > 0 && {
          'data-completed': true
        })}
      >
        <img src={Deployment} alt='Add Deployment' />
        <Link to='/templates' className={css.Link}>
          publish first deployment
        </Link>
      </li>
    </ul>
  </div>
)

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Actions)
