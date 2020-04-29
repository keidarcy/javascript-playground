import React, { Component } from 'react'
import { getMovies } from '../services/fakeMovieService'
import { getGenres } from '../services/fakeGenreService'
import Pagination from './common/pagination'
import MoviesTable from './movieTable'
import ListGroup from './common/listGroup'
import { paginate } from '../utils/paginate'
import lodash from 'lodash'
import { Link } from 'react-router-dom'
import SearchBox from './common/searchBox'

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: 'title', order: 'asc' },
    word: '',
    searchQuery: '',
    selectedGenre: null
  }
  componentDidMount() {
    const genres = [{ name: 'All Genres', _id: false }, ...getGenres()]
    this.setState({ movies: getMovies(), genres })
  }
  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 })
  }
  handleSort = (sortColumn) => {
    this.setState({ sortColumn })
  }
  getPageData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      searchQuery,
      movies: allMovies
    } = this.state
    let filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies
    if (searchQuery) {
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      )
    } else if (selectedGenre && selectedGenre._id) {
      filtered = allMovies.filter((m) => m.genre._id === selectedGenre._id)
    }
    const sorted = lodash.orderBy(filtered, [sortColumn.path], [sortColumn.order])
    const data = paginate(sorted, currentPage, pageSize)
    return { totalCount: filtered.length, data }
  }
  // handleSearchChange = (e) => {
  //   let word = this.state.word
  //   word = e.currentTarget.value
  //   this.setState({ word })
  //   const movies = this.state.movies.filter((m) => m.title.includes(word))
  //   this.setState({ movies })
  // }
  handleSearch = (query) => {
    this.setState({ searchQuery: query, searchGenre: null, currentPage: 1 })
  }
  render() {
    const { currentPage, pageSize, sortColumn } = this.state
    const { length: count } = this.state.movies
    const { totalCount, data: movies } = this.getPageData()

    if (!count) return <h1>There are no movies</h1>

    return (
      <React.Fragment>
        <Link to="/movies/new">
          <button className="btn btn-primary">New Movie</button>
        </Link>
        <h1 className="text-center my-5">There are {totalCount} movies</h1>
        <div className="row">
          <div className="col-3">
            <ListGroup
              onItemSelect={this.handleGenreSelect}
              selectedGenre={this.state.selectedGenre}
              items={this.state.genres}
            />
          </div>
          <div className="col">
            <SearchBox onChange={this.handleSearch} value={this.state.searchQuery} />
            <MoviesTable
              onLikeToggle={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
              sortColumn={sortColumn}
              movies={movies}
            />
          </div>
        </div>
        <Pagination
          className="m-5"
          currentPage={currentPage}
          itemsCount={totalCount}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    )
  }
  handlePageChange = (page) => {
    this.setState({ currentPage: page })
  }
  handleLike = (movie) => {
    const movies = [...this.state.movies]
    const index = movies.indexOf(movie)
    movies[index] = { ...movies[index] }
    movies[index].like = !movies[index].like
    this.setState({ movies })
  }
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((c) => c._id !== movie._id)
    this.setState({ movies })
  }
}

export default Movies
