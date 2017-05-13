import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fetchObjectById } from '../../utils/fetchUtils'
import Loader from '../../components/Loader/Loader'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import { Link } from 'react-router-dom'
import Container from '../../components/Container/Container'
import Row from '../../components/Row/Row'

const propTypes = {
  comicId: PropTypes.string
}

class ComicContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: undefined,
      comic: {},
      img: {},
      characters: {},
      series: {},
      urls: [],
      dates: [],
      variants: [],
      prices: []
    }
    this.handleCamelCase = this.handleCamelCase.bind(this)
    this.getId = this.getId.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.comicId !== this.props.comicId)
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
    fetchObjectById('comics', this.props.comicId)
    .then(res => this.setState({
      comic: res.data.results[0],
      img: res.data.results[0].thumbnail,
      characters: res.data.results[0].characters,
      series: res.data.results[0].series,
      urls: res.data.results[0].urls,
      variants: res.data.results[0].variants,
      prices: res.data.results[0].prices,
      loading: false
    }))
  }

  render() {
    const {loading, comic, img, series, characters, urls, variants, prices} = this.state
    return (
      <Container>
      {loading && <Loader />}
        <HeroBanner id={comic.id} name={comic.title} img={img} description={comic.description} />
        <Row>
          <div className='col-sm-4'>
            <h2>{comic.title}</h2>
            {prices && prices.length > 0 &&
              <ul className='list-unstyled'>
              {prices.map((item, index) => (
                <span key={index} className='label label-default'>{this.handleCamelCase(item.type)}: ${item.price.toFixed(2)}</span>
              ))}
              </ul>
            }
            <p dangerouslySetInnerHTML={{__html: comic.description}} />
              {urls.length > 0 &&
                urls.map((item, index) => (
                  <Link to={item.url} key={index} target='_blank'><span className='label label-primary'>{item.type.toUpperCase()}</span></Link>
              ))}
          </div>
          <div className='col-sm-4'>
            {series && series.resourceURI &&
              <ul className='list-unstyled'>
                <h3>Series</h3>
                <li><Link to={`/series/${this.getId(series.resourceURI)}`}>{series.name}</Link></li>
              </ul>
            }
            {variants && variants.length > 0 &&
              <ul className='list-unstyled'>
              <h3>Comic Variants</h3>
              {variants.map((item, index) => (
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

ComicContainer.propTypes = propTypes
export default ComicContainer
