import React from 'react'
import PropTypes from 'prop-types'
import './Hero.scss'

const propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.object
}

const Hero = ({ name, description, img }) => (
  <div className='hp-hero-wrapper'>
    <div className='hero-inner' style={{ backgroundImage: `url(${img.path}.${img.extension})`}}>
      <span className='hero-name'>{name}</span>
    </div>
  </div>
)

Hero.propTypes = propTypes
export default Hero
