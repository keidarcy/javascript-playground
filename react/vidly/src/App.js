import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import auth from './services/authService'
import NavBar from './components/common/navbar'
import Movies from './components/movies'
import Customers from './components/customers'
import Rentals from './components/rentals'
import NotFound from './components/notFound'
import MovieForm from './components/movieForm'
import LoginForm from './components/loginForm'
import RegisterForm from './components/registerForm'
import Logout from './components/logout'
import ProtectedRoute from './components/common/protectedRoute'

class App extends React.Component {
  state = {}
  componentDidMount() {
    const user = auth.getCurrentUser()
    this.setState({ user })
  }
  render() {
    const { user } = this.state
    return (
      <>
        <ToastContainer />
        <NavBar user={user} />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/logout" component={Logout}></Route>
            <Route path="/register" component={RegisterForm}></Route>
            <ProtectedRoute path="/movies/:id" component={MovieForm} />
            {/* <Route
              path="/movies/:id"
              render={() => {
                if (!user) return <Redirect to="/login" />
                else return <MovieForm />
              }}
            /> */}
            <Route path="/movies" render={(props) => <Movies {...props} user={user} />} />
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect exact from="/" to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </>
    )
  }
}

export default App
