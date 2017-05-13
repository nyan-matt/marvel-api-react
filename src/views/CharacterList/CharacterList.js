import React from 'react'
import queryString from 'query-string'
import CharacterListContainer from '../../containers/CharacterListContainer/CharacterListContainer'

const CharacterListView = ({ match, location, history }) => {
  const params = queryString.parse(location.search)
  return (
  <div className='container-fluid'>
    <CharacterListContainer
      page={parseInt(params.page, 10) || 1}
      term={params.query || undefined}
      match={match}
      history={history}
      location={location}
    />
  </div>
  )
}

export default CharacterListView
