import React from 'react'
import CharacterContainer from '../../containers/CharacterContainer/CharacterContainer'

const CharacterView = ({match}) => (
  <div className='container-fluid'>
    <CharacterContainer charId={match.params.id} />
  </div>
)

export default CharacterView
