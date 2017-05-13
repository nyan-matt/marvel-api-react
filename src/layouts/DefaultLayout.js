import React from 'react'
import PropTypes from 'prop-types'
// import Footer from '../components/Footer/Footer'
// import Header from '../components/Header/Header'
// import Sidebar from '../components/Sidebar/Sidebar'
// import classNames from 'classnames/bind'
// import styles from './DefaultLayout.scss'
// const cx = classNames.bind(styles)

const propTypes = {
  children: PropTypes.node
}

const DefaultLayout = ({ children }) => (
  <div style={{background:'pink'}}>
    <div style={{background:'purple'}}>
      <div style={{background:'green'}}>
        {children}
      </div>
    </div>
  </div>
)

DefaultLayout.propTypes = propTypes

export default DefaultLayout
