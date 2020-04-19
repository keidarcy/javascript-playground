import React, { Component } from 'react'
import Counter from './counter'

class Counters extends Component {
  render() {
    console.log('Counters - rendered')
    const { onReset, counters, onDelete, onIncrement, onDecrement } = this.props
    return (
      <div>
        <ul>
          <button onClick={() => onReset()} className="btn btn-info btn-sm m-2">
            reset
          </button>
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              onDelete={onDelete}
              counter={counter}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            >
              <h4>Counter #{counter.id}</h4>
            </Counter>
          ))}
        </ul>
      </div>
    )
  }
}

export default Counters
