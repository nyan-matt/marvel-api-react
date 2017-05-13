import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const propTypes = {
  children: PropTypes.node
}

const AppContainer = ({ children }) => (
  <div className="app-root">
    <Header />
      <div className='body'>
        {children}
      </div>
    <Footer />
  </div>
)

AppContainer.propTypes = propTypes

export default AppContainer
