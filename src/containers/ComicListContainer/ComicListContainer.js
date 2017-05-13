import React, { Component } from 'react'
import queryString from 'query-string'
import PropTypes from 'prop-types'
import { fetchObjects } from '../../utils/fetchUtils'
import DataCard from '../../components/DataCard/DataCard'
import Loader from '../../components/Loader/Loader'
import Pagination from 'react-js-pagination'
import Hr from '../../components/Hr/Hr'
import Container from '../../components/Container/Container'
import Heading from '../../components/Heading/Heading'
import Row from '../../components/Row/Row'
import SearchForm from '../../components/SearchForm/SearchForm'
import NoResults from '../../components/NoResults/NoResults'

const propTypes = {
  page: PropTypes.number,
  term: PropTypes.string
}

const defaultProps = {
  page: 1
}

class ComicListContainer extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      loading: undefined,
      comics: [],
      limit: 20,
      inputTerm: undefined
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    window.scrollTo(0, 0);
    this.handleFetch(nextProps.page, nextProps.term)
  }

  componentWillMount() {
    this.handleFetch(this.props.page, this.props.term)
  }

  handlePageChange(pageNumber) {
    const parsed = queryString.parse(location.search)
    parsed.page = pageNumber
    this.props.history.push(`?${queryString.stringify(parsed)}`)
  }

  handleChange(event) {
    this.setState({inputTerm: event.target.value})
  }

  handleSubmit(event) {
   event.preventDefault();
   this.props.history.push(`?query=${this.state.inputTerm}`)
 }

  handleFetch(page, term) {
    const LIMIT = 20
    const defaultOptions = {offset: (LIMIT * (page - 1)), orderBy: 'title'}
    const searchOption = term ? { titleStartsWith: term} : null
    let mergedOptions = Object.assign(defaultOptions, searchOption)
    this.setState( { loading: true })
    fetchObjects('comics', mergedOptions)
    .then(res => this.setState({
      comics: res.data.results,
      offset: res.data.offset,
      limit: res.data.limit,
      total: res.data.total,
      count: res.data.count,
      loading: false,
    }))

  }

  render() {
    const {comics, loading } = this.state
    if (this.state.total === 0) {
      return <NoResults term={this.props.term} />
    }

    return (
      <Container>
        <Heading tag={'h1'}>
          Comics <small>{this.state.total ? `(${this.state.total})` : ''}</small>
        </Heading>
        <SearchForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          placeholder={'Search for Comics by Title'}
        />
        <Hr />
        <Row>
          {loading && <Loader />}
          {comics.map(({id, title, thumbnail, description}, i) => (
            <DataCard
              key={i}
              id={id}
              name={title}
              img={thumbnail}
              description={description}
              baseLink={'/comics'}
            />
          ))}
        </Row>
        <Hr />
        <Row classNames={'text-center'}>
          <Pagination
            onChange={this.handlePageChange}
            activePage={this.props.page}
            itemsCountPerPage={this.state.limit}
            totalItemsCount={this.state.total || 0}
            pageRangeDisplayed={7}
            hideDisabled={true}
          />
        </Row>
      </Container>
    )
  }
}

ComicListContainer.propTypes = propTypes
ComicListContainer.defaultProps = defaultProps
export default ComicListContainer
