import React, { Component } from 'react'
import MoviePage from './context/MoviePage'
import UserContext from './context/userContext'
import Login from './context/Login'
import CartContext from './context/cartContext'

class App extends Component {
  handleLoggedIn = (username) => {
    console.log('getting the user: ' + username)
    const user = { name: 'yyf' }
    this.setState({ currentUser: user })
  }
  state = { currentUser: { name: null } }

  render() {
    return (
      // <UserContext.Provider value={this.state.currentUser}>
      <CartContext.Provider value={{ cart: [] }}>
        <UserContext.Provider
          value={{
            currentUser: this.state.currentUser,
            onLoggedIn: this.handleLoggedIn
          }}
        >
          <div>
            <MoviePage />
            <Login />
          </div>
        </UserContext.Provider>
      </CartContext.Provider>
    )
  }
}

export default App
