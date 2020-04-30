import React from 'react'
import Like from './common/like'
import Table from './common/table'
import { Link } from 'react-router-dom'
import authService from '../services/authService'

class MoviesTable extends React.Component {
  columns = [
    {
      path: 'title',
      label: 'Title',
      // content: (movie) => <p>{movie.title}</p>
      content: (movie) => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
    },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    {
      key: 'like',
      content: (movie) => (
        <Like onLikeToggle={() => this.props.onLikeToggle(movie)} liked={movie.like} />
      )
    },
    {
      key: 'delete',
      content: (movie) =>
        authService.isAdmin() && (
          <button
            onClick={() => this.props.onDelete(movie)}
            className="btn btn-danger btn-sm"
          >
            X
          </button>
        )
    }
  ]
  render() {
    const { movies, sortColumn, onSort } = this.props
    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    )
  }
}

export default MoviesTable
