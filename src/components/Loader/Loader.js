import React from 'react'
import './Loader.scss'
import { Loader as ReactLoader } from 'react-loaders'

const Loader = () => (
  <div className='loader-container'>
    <ReactLoader type='ball-scale-multiple' active={true} />
  </div>
)

export default Loader
