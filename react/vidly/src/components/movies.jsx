import React, { Component } from 'react'
import { getMovies } from '../services/fakeMovieService'
import Pagination from './common/pagination'
import MoviesTable from './movieTable'
import ListGroup from './common/listGroup'
import { paginate } from '../utils/paginate'
import { getGenres } from '../services/fakeGenreService'
import lodash from 'lodash'

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: 'title', order: 'asc' }
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
      movies: allMovies,
      currentPage,
      selectedGenre,
      pageSize,
      sortColumn
    } = this.state
    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies
    const sorted = lodash.orderBy(filtered, [sortColumn.path], [sortColumn.order])
    console.log(sorted)
    const data = paginate(sorted, currentPage, pageSize)
    console.log(data)
    return { totalCount: filtered.length, data }
  }
  render() {
    const { currentPage, pageSize, sortColumn } = this.state
    const { length: count } = this.state.movies
    const { totalCount, data: movies } = this.getPageData()

    if (!count) return <h1>There are no movies</h1>

    return (
      <React.Fragment>
        <h1 className="text-center my-5">There are {totalCount} movies</h1>
        <div className="row">
          <div className="col-3">
            <ListGroup
              onItemSelect={this.handleGenreSelect}
              selectedGenre={this.state.selectedGenre}
              items={this.state.genres}
            />
          </div>
          <MoviesTable
            onLikeToggle={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            sortColumn={sortColumn}
            movies={movies}
          />
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
