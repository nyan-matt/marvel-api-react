import React from 'react'
import SeriesContainer from '../../containers/SeriesContainer/SeriesContainer'

const SeriesView = ({match}) => (
  <div className='container-fluid'>
    <SeriesContainer seriesId={match.params.id} />
  </div>
)

export default SeriesView
