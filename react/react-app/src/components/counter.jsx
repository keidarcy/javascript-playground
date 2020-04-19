import React, { Component } from 'react'

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps)
    console.log('prevState', prevState)
  }
  styles = {
    fontSize: 20,
    fontWeight: 'bold',
  }

  componentWillUnmount() {
    console.log('Counter - unmounted')
  }

  // handleIncrement = () => {
  //   this.setState({ count: this.state.value + 1 })
  // }

  render() {
    console.log('Counter - rendered')
    return (
      <React.Fragment>
        {this.props.children}
        <li>
          <span style={this.styles} className={this.getBadgeClass()}>
            {this.formatCount()}
          </span>
          <button
            style={{ fontSize: 20 }}
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-dark"
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="m-3 btn btn-danger"
          >
            X
          </button>
        </li>
      </React.Fragment>
    )
  }

  getBadgeClass() {
    let classes = 'badge m-2 badge-'
    classes += this.props.counter.value === 0 ? 'warning' : 'primary'
    return classes
  }

  formatCount() {
    const { value } = this.props.counter
    return value === 0 ? 'Zero' : value
  }
}

export default Counter
