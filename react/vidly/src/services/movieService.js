import http from './httpService'
import { apiUrl } from '../config.json'

const moviesUrl = apiUrl + 'movies'

const movieUrl = (id) => {
  return `${moviesUrl}/${id}`
}

const getMovies = () => {
  return http.get(moviesUrl)
}

const deleteMovie = (id) => {
  return http.delete(movieUrl(id))
}

const saveMovie = (movie) => {
  if (movie._id) {
    const body = { ...movie }
    delete body._id
    return http.put(movieUrl(movie._id), body)
  }
  return http.post(moviesUrl, movie)
}

const getMovie = (id) => {
  return http.get(movieUrl(id))
}
export { getMovies, deleteMovie, saveMovie, getMovie }
