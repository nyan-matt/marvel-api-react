import React from 'react'
import PropTypes from 'prop-types'
import './HeroBanner.scss'

const propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.object
}

const HeroBanner = ({ id, name, description, img }) => (
  <div className='hero-wrapper' style={{ backgroundImage: `url(${img.path}.${img.extension})`}}>
  </div>
)

HeroBanner.propTypes = propTypes
export default HeroBanner
