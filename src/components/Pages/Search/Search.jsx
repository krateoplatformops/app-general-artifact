import React from 'react'
import { connect } from 'react-redux'
import SearchResult from './SearchResult/SearchResult'
import { uiConstants } from '../../../constants/ui.constants'

const Search = (props) => {
  const params = new URLSearchParams(window.location.search)

  const q = params.get('q').toLowerCase()

  return (
    <React.Fragment>
      <h1>Search: {q}</h1>
      {(props.deployment.list || [])
        .filter((x) => {
          return JSON.stringify(x).toLowerCase().indexOf(q) > -1
        })
        .map((x) => (
          <SearchResult
            key={x.metadata.uid}
            r={{
              name: x.claim.metadata.name,
              description: x.claim.spec.dashboard.description,
              kind: 'deployment',
              to: `/deployments/${x.metadata.uid}`,
              icon: x.claim.spec.dashboard.icon,
              tags: x.claim.spec.dashboard.tags,
              kindIcon: uiConstants.nav.find((x) => x.label === 'deployments')
                .icon
            }}
          />
        ))}

      {(props.template.list || [])
        .filter((x) => {
          return JSON.stringify(x).toLowerCase().indexOf(q) > -1
        })
        .map((x) => (
          <SearchResult
            key={x.metadata.uid}
            r={{
              name: x.metadata.name,
              description: x.metadata.annotations.description,
              kind: 'template',
              to: `/templates/${x.metadata.uid}`,
              icon: x.metadata.annotations.icon,
              tags: x.metadata.labels.tags,
              kindIcon: uiConstants.nav.find((x) => x.label === 'templates')
                .icon
            }}
          />
        ))}
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Search)
