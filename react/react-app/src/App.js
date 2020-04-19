import React, { Component } from 'react'
import './App.css'
import NavBar from './components/navbar'
import Counters from './components/counters'

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 8 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  }
  constructor() {
    super()
    console.log('App - Constructor')
  }
  componentDidMount() {
    console.log('App - Mounted')
  }
  handleIncrement = (counter) => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value++
    this.setState({ counters })
  }
  handleDelete = (id) => {
    const counters = this.state.counters.filter((c) => c.id !== id)
    console.log(counters)
    this.setState({ counters })
  }
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0
      return c
    })
    this.setState({ counters })
  }
  handleDecrement = (counter) => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value--
    this.setState({ counters })
  }
  render() {
    console.log('App - rendered')
    return (
      <React.Fragment>
        <NavBar
          TotalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    )
  }
}

export default App
