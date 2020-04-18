import React, { Component } from 'react'
import { getMovies, deleteMovie } from '../fakeMovieService'
class Counter extends Component {
  state = {
    count: 1,
    tags: ['tag1', 'tag2', 'tag3'],
    movies: getMovies(),
    total: getMovies().length,
  }
  styles = {
    fontSize: 20,
    fontWeight: 'bold',
  }
  handleDeleteMovie = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id)
    this.showMessage()
    this.setState({ movies })
  }
  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClass()}>
          {this.formatCount()}
        </span>
        <button
          style={{ fontSize: 20 }}
          onClick={() => this.handleIncrement({ id: 11 })}
          className="btn btn-secondary btn-sm"
        >
          increment
        </button>
        <ul>
          {this.state.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
        <h2>{this.showMessage()}</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <th>{movie.title}</th>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDeleteMovie(movie)}
                    className="btn btn-danger"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    )
  }

  showMessage() {
    const { length } = this.state.movies
    console.log(length)
    if (this.state.total) {
      return `We have ${this.state.total} movies`
    } else return 'There are no movie'
  }
  getBadgeClass() {
    let classes = 'badge m-2 badge-'
    classes += this.state.count === 0 ? 'warning' : 'primary'
    return classes
  }

  formatCount() {
    const { count } = this.state
    return count === 0 ? 'Zero' : count
  }
}

export default Counter
