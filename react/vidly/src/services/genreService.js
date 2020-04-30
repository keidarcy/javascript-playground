import http from './httpService'
import { apiUrl } from '../config.json'

const getGenres = () => {
  return http.get(apiUrl + 'genres')
}

export { getGenres }
