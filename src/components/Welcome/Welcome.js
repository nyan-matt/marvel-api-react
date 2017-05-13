import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../components/Container/Container'
import Row from '../../components/Row/Row'

const Welcome = () => (
  <Container>
    <Row styles={{marginTop:'20px'}}>
    <div className='col-sm-12'>
      <h2>About this project</h2>
      <p>
        A small project using <Link to=''>React</Link> &amp; <Link to=''>isomorphic-fetch</Link> to ilustrate client-side fetching
        REST resources from a public api. This project uses the <Link to=''>Marvel API</Link>, which
        unlike some other APIs (Star Wars, Pokémon) provides image resources
        which make PoC projects like this a little more interesting.
      </p>
      <h3>About this stack</h3>
      <p>
        This repo <em>loosely</em> follows the <Link to=''>smart container/dumb component
        pattern</Link> - using containers for data fetching and components for
        rendering. I have too much styling stuff in my containers. Started from <Link to=''>create-react-app</Link>, extended via
         <Link to='https://medium.com/@kitze/configure-create-react-app-without-ejecting-d8450e96196a'>react-custom-scripts</Link>
        for including SASS functionality. Base styles are from Bootstrap with
        minimal customization. Im using react-router v4 which is a bit different
        than past versions, but it has grown on me.
      </p>
      <h3>TODOs / Bugs</h3>
      <ul>
        <li>More robust error handling</li>
        <li>Tests</li>
        <li>More robust character search options</li>
        <li>Maybe give this a try with a backend graphQL proxy server</li>
        <li>Move container logic and state into Redux</li>
      </ul>
    </div>
    </Row>
  </Container>
)

export default Welcome
