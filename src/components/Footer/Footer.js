import React from 'react'
import Container from '../Container/Container'
import Row from '../Row/Row'
import { Link } from 'react-router-dom'

import './Footer.scss'

const Footer = () => (
  <Container classNames={'footer'}>
    <Row>
      <div className='col-xs-12'>
        <img className='logo' width='120' src='/img/MarvelLogo1.svg' role='presentation' /><br/>
        <a href="http://marvel.com">Data provided by Marvel. © {new Date().getFullYear()} MARVEL</a><br/>
        <a href="http://developer.marvel.com">developer.marvel.com</a>
        <ul className='list-inline'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/characters'>Characters</Link></li>
        <li><Link to='/comics'>Comics</Link></li>
        <li><Link to='/series'>Series</Link></li>
        </ul>
      </div>
    </Row>
  </Container>
)

export default Footer
