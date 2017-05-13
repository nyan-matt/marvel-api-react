import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fetchObjectById } from '../../utils/fetchUtils'
import Loader from '../../components/Loader/Loader'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import { Link } from 'react-router-dom'
import Container from '../../components/Container/Container'
import Row from '../../components/Row/Row'
import DataList from '../../components/DataList/DataList'

const propTypes = {
  charId: PropTypes.string
}

class CharacterContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: undefined,
      character: {},
      img: {},
      comics: {},
      series: {},
      urls: []
    }
  }

  componentWillMount() {
    window.scrollTo(0, 0)
    this.handleFetch()
  }

  handleFetch() {
    this.setState( { loading: true })
    fetchObjectById('characters', this.props.charId)
    .then(res => this.setState({
      character: res.data.results[0],
      img: res.data.results[0].thumbnail,
      comics: res.data.results[0].comics,
      series: res.data.results[0].series,
      urls: res.data.results[0].urls,
      loading: false
    }))
  }

  render() {
    const {loading, character, img, series, comics, urls} = this.state
    return (
      <Container>
      {loading && <Loader />}
        <HeroBanner id={character.id} name={character.name} img={img} description={character.description} />
        <Row>
          <div className='col-sm-4'>
            <h2>{character.name}</h2>
            <p>{character.description}</p>
            <ul className='list-inline'>
              {urls.length > 0 &&
                urls.map((item, index) => (
                  <Link to={item.url} key={index} target='_blank'><span className='label label-primary'>{item.type.toUpperCase()}</span></Link>
              ))}
            </ul>
          </div>
          <div className='col-sm-4'>
            {comics.items && comics.items.length > 0 &&
            <DataList listItems={comics} resource={'comics'} label={'Comics'} />
            }
          </div>
          <div className='col-sm-4'>
            {series.items && series.items.length > 0 &&
            <DataList listItems={series} resource={'series'} label={'Series'} />
            }
          </div>
        </Row>
      </Container>
    )
  }
}

CharacterContainer.propTypes = propTypes
export default CharacterContainer
