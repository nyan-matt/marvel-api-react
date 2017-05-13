import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const propTypes = {
  label: PropTypes.string,
  description: PropTypes.string,
  listItems: PropTypes.object,
  resource: PropTypes.string
}

const DataList = ({ label, description, listItems, resource }) => (
  <ul className='list-unstyled'>
  <h3>{label}</h3>
    {listItems.items.map((item, index) => {
      const resourceId = item.resourceURI.split('/')[item.resourceURI.split('/').length - 1]
      return (
        <li key={index}>
        <Link to={`/${resource}/${resourceId}`}>
          {item.name}
        </Link>
      </li>
    )
    })}

  </ul>
)

DataList.propTypes = propTypes
export default DataList
