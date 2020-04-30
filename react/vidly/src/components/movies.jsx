import React, { Component } from 'react'
import { toast } from 'react-toastify'
import { getMovies, deleteMovie } from '../services/movieService'
import { getGenres } from '../services/genreService'
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
  async componentDidMount() {
    // console.log(1,getGenres());
    // const genreData = await (await getGenres()).data
    const { data: genreData } = await getGenres()
    // const moviesData = await (await getMovies()).data
    const { data: moviesData } = await getMovies()
    const genres = await [{ name: 'All Genres', _id: false }, ...genreData]
    this.setState({ movies: moviesData, genres })
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
    const { user } = this.props
    const { currentPage, pageSize, sortColumn } = this.state
    const { length: count } = this.state.movies
    const { totalCount, data: movies } = this.getPageData()

    if (!count) return <h1>There are no movies</h1>

    return (
      <React.Fragment>
        {user && (
          <Link to="/movies/new">
            <button className="btn btn-primary">New Movie</button>
          </Link>
        )}
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
  handleDelete = async (movie) => {
    const originMovies = this.state.movies
    const movies = this.state.movies.filter((c) => c._id !== movie._id)
    this.setState({ movies })
    try {
      await deleteMovie(movie._id)
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error('already deleted')
      }
      this.setState({ movies: originMovies })
    }
  }
}

export default Movies
