import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fetchObjectById } from '../../utils/fetchUtils'
import Loader from '../../components/Loader/Loader'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import { Link } from 'react-router-dom'
import Container from '../../components/Container/Container'
import Row from '../../components/Row/Row'

const propTypes = {
  seriesId: PropTypes.string
}

class SeriesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: undefined,
      series: {},
      img: {},
      characters: {},
      comics: {},
      urls: []
    }
    this.handleCamelCase = this.handleCamelCase.bind(this)
    this.getId = this.getId.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.seriesId !== this.props.seriesId)
      this.handleFetch()
  }

  componentWillMount() {
    this.handleFetch()
  }

  getId(string) {
    return string
    .split('/')[string.split('/').length - 1]
  }

  handleCamelCase(string) {
    return string
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, function(str){ return str.toUpperCase() })
  }

  handleFetch() {
    this.setState( { loading: true })
    fetchObjectById('series', this.props.seriesId)
    .then(res => this.setState({
      series: res.data.results[0],
      img: res.data.results[0].thumbnail,
      characters: res.data.results[0].characters,
      comics: res.data.results[0].comics,
      urls: res.data.results[0].urls,
      loading: false
    }))
  }

  render() {
    const {loading, series, img, comics, characters, urls} = this.state
    return (
      <Container>
      {loading && <Loader />}
        <HeroBanner id={series.id} name={series.title} img={img} description={series.description} />
        <Row>
          <div className='col-sm-4'>
            <h2>{series.title}</h2>
            <p dangerouslySetInnerHTML={{__html: series.description}} />
              {urls.length > 0 &&
                urls.map((item, index) => (
                  <Link to={item.url} key={index} target='_blank'><span className='label label-primary'>{item.type.toUpperCase()}</span></Link>
              ))}
          </div>
          <div className='col-sm-4'>
            {comics.items && comics.items.length > 0 &&
              <ul className='list-unstyled'>
                <h3>Comics</h3>
                {comics.items.map((item, index) => (
                  <li key={index}><Link to={`/comics/${this.getId(item.resourceURI)}`}>{item.name}</Link></li>
                ))}
              </ul>
            }

          </div>
          <div className='col-sm-4'>
          {characters.items && characters.items.length > 0 &&
            <ul className='list-unstyled'>
            <h3>Characters</h3>
            {characters.items.map((item, index) => (
              <li key={index}><Link to={`/characters/${this.getId(item.resourceURI)}`}>{item.name}</Link></li>
            ))}
            </ul>
          }
          </div>
        </Row>
      </Container>
    )
  }
}

SeriesContainer.propTypes = propTypes
export default SeriesContainer
