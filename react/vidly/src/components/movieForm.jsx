import React from 'react'
import Form from './common/form'
import Joi from 'joi-browser'
// import { getGenres } from '../services/fakeGenreService'
import { getGenres } from '../services/genreService'
import { saveMovie, getMovie } from '../services/movieService'
// import { saveMovie, getMovie } from '../services/fakeMovieService'

class MovieForm extends Form {
  state = {
    data: {
      title: '',
      genreId: '',
      numberInStock: '',
      dailyRentalRate: ''
    },
    genres: [],
    errors: {}
  }
  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label('Title'),
    genreId: Joi.string().required().label('Genre'),
    numberInStock: Joi.number().required().min(0).max(100).label('Number in Stock'),
    dailyRentalRate: Joi.number().required().min(0).max(100).label('Daily Rental Rate')
  }
  async populateGenres() {
    const { data: genres } = await getGenres()
    this.setState({ genres })
  }
  async poplateMovies() {
    try {
      const movieId = this.props.match.params.id
      if (movieId === 'new') return
      const { data: movie } = await getMovie(movieId)
      this.setState({ data: this.mapToViewModel(movie) })
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace('/not-found')
    }
  }
  async componentDidMount() {
    await this.populateGenres()
    await this.poplateMovies()
  }
  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate
    }
  }
  async doSubmit() {
    await saveMovie(this.state.data)
    console.log(this.state.data)
    this.props.history.push('/movies')
  }
  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('title', 'Title')}
          {this.renderSelect('genreId', 'Genre', this.state.genres)}
          {this.renderInput('numberInStock', 'Number in Stock')}
          {this.renderInput('dailyRentalRate', 'Rate')}
          {this.renderButton('Register')}
        </form>
      </div>
    )
  }
}

export default MovieForm

// <h1>MovieForm: {match.params.id}</h1>
// <button onClick={() => history.push('/movies')} className="btn btn-primary">
//   Save
// </button>
