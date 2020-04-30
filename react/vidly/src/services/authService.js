import http from './httpService'
import { apiUrl } from '../config.json'
import jwtDecode from 'jwt-decode'

// import jwtDecode from 'jwt-decode'
const apiEndpoint = apiUrl + 'auth'
const token = 'token'

const getJwt = () => {
  return localStorage.getItem(token)
}
http.setJwt(getJwt())

const login = async (email, password) => {
  const { data: jwt } = await http.post(apiEndpoint, { email, password })
  localStorage.setItem(token, jwt)
}

const loginWithJwt = (jwt) => {
  localStorage.setItem(token, jwt)
}

const logout = () => {
  localStorage.removeItem(token)
}

const getCurrentUser = () => {
  try {
    const jwt = localStorage.getItem(token)
    return jwtDecode(jwt)
  } catch (ex) {}
}

const isAdmin = () => {
  return getCurrentUser()?.isAdmin
}

export default { isAdmin, getJwt, login, logout, getCurrentUser, loginWithJwt }
