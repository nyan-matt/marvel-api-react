import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fetchObjectById } from '../../utils/fetchUtils'
import Loader from '../../components/Loader/Loader'
import Container from '../../components/Container/Container'
import Row from '../../components/Row/Row'
import Welcome from '../../components/Welcome/Welcome'
import Hero from '../../components/Hero/Hero'
import { Link } from 'react-router-dom'
import { featuredChars as Featured } from '../../data/localData'
import Slider from 'react-slick'

const propTypes = {
  page: PropTypes.number
}

class HomeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      featuredChars: [],
      error: false
    }
  }

  componentWillMount() {
    Featured.map((id => this.handleFetchRelated(id)))
  }

  handleFetchRelated(id) {
    // trying .race() to set a timeout
    let fetchRequest = Promise.race([
      fetchObjectById('characters', id),
      new Promise(function (resolve, reject) {
        setTimeout(() => reject(new Error('request timeout')), 7000)
      })
    ])
    fetchRequest.then(res => this.setState((prevState) => ({
      featuredChars: prevState.featuredChars.concat([res.data.results[0]])
    })))
    fetchRequest.catch(error => this.setState({ error : true }))
  }

  render() {
    const {featuredChars, error } = this.state
    return (
      <div>
        <Container classNames={'red-stripe-bg'}>
          <Row classNames={'ml15 mr15'}>
            {featuredChars.length !== Featured.length ?
              !error ? <Loader /> : <div className='alert alert-danger' role='alert'>Error Fetching data</div>
              :
              <Slider slidesToShow={1} slidesToScroll={1} lazy dots={true} draggable={false} arrows={false}>
              {featuredChars.map(({id, name, thumbnail, description}, i) => (
                <div key={i}>
                  <Link to={`/characters/${id}`}>
                    <Hero name={name} id={id} img={thumbnail} description={description} />
                  </Link>
                </div>
              ))}
              </Slider>
            }
          </Row>
        </Container>
        <Welcome />
      </div>
    )
  }
}

HomeContainer.propTypes = propTypes
export default HomeContainer
