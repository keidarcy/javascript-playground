import React, { Component } from 'react'
import { getMovies } from '../services/fakeMovieService'
import Like from './common/like'
import Pagination from './common/pagination'
import ListGroup from './common/listGroup'
import { paginate } from '../utils/paginate'
import { getGenres } from '../services/fakeGenreService'

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 2,
    currentPage: 1
  }
  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() })
  }
  handleGenreSelect = (genre) => {
    console.log(genre)
  }
  render() {
    const { movies: allMovies, currentPage, pageSize } = this.state
    const { length: count } = this.state.movies
    if (!count) return <h1>There are no movies</h1>
    const movies = paginate(allMovies, currentPage, pageSize)
    return (
      <React.Fragment>
        <h1 className="text-center my-5">There are {count} movies</h1>
        <div className="row">
          <div className="col-3">
            <ListGroup
              textProperty="name"
              valueProperty="_id"
              onItemSelect={this.handleGenreSelect}
              items={this.state.genres}
            />
          </div>
          <table className="table col">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <tr key={movie._id}>
                  <th scope="row">{movie.title}</th>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      onLikeToggle={() => this.handleLike(movie)}
                      liked={movie.like}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie)}
                      className="btn btn-danger btn-sm"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination
          className="m-5"
          currentPage={currentPage}
          itemsCount={count}
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
