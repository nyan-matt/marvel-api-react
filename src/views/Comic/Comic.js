import React from 'react'
import ComicContainer from '../../containers/ComicContainer/ComicContainer'

const ComicView = ({match}) => (
  <div className='container-fluid'>
    <ComicContainer comicId={match.params.id} />
  </div>
)

export default ComicView
