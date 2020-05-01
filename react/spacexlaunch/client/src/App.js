import React from 'react'
import logo from './logo.png'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import Launches from './components/Launches'
import Launch from './components/Launch'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

const client = new ApolloClient({
  uri: '/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img src={logo} alt="logo" style={logoStyle} />
          <Route exact path="/" component={Launches} />
          <Route path="/launch/:flight_number" component={Launch} />
          <Redirect to="/" />
        </div>
      </Router>
    </ApolloProvider>
  )
}

const logoStyle = {
  width: 150,
  display: 'block',
  margin: 'auto'
}

export default App
