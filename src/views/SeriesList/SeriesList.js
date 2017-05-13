import React from 'react'
import queryString from 'query-string'
import SeriesListContainer from '../../containers/SeriesListContainer/SeriesListContainer'

const SeriesListView = ({ match, location, history }) => {
  const params = queryString.parse(location.search)
  return (
  <div className='container-fluid'>
    <SeriesListContainer
      page={parseInt(params.page, 10) || 1}
      match={match}
      term={params.query || null}
      history={history}
      location={location}
    />
  </div>
  )
}

export default SeriesListView
