import axios from 'axios'
import { toast } from 'react-toastify'

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response && error.response.status >= 400 && error.response.status < 500

  if (!expectedError) {
    console.log(expectedError)
    console.log('Logging error: ', error)
    toast.error('AN unexpected error happened')
  }
  return Promise.reject(error)
})

const setJwt = (jwt) => {
  axios.defaults.headers.common['x-auth-token'] = jwt
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
}
