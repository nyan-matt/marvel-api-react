import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './DataCard.scss'

const propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.object,
  description: PropTypes.string
}

const DataCard = ({ id, name, img, description, baseLink }) => (
  <div className='col-lg-2 col-md-3 col-sm-4 col-xs-6 card-wrapper'>
    <div className='card-inner'>
      <Link to={`${baseLink}/${id}`}>
      <div className='card-img' style={{ backgroundImage: `url(${img.path}.${img.extension})` }} />
      <div className='card-title'>{name}</div>
      </Link>
      <div className='card-description'>
        {description ?
          description
          :
          'No description provided'
        }
      </div>
    </div>
  </div>
)

DataCard.propTypes = propTypes
export default DataCard
