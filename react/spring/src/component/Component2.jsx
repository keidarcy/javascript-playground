import React, { Component } from 'react'
import { Spring } from 'react-spring/renderprops'

export class Component2 extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0.5, marginTop: -500 }}
        to={{ opacity: 1, marginTop: 0 }}
        config={{ delay: 1000, duration: 1000 }}
      >
        {(props) => (
          <div style={props}>
            <div style={c2Style}>
              <h1>Component2</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fugit at
                sequi ipsa, eaque sunt repellendus nihil mollitia facere dolor aliquam
                nesciunt rem. Ex odio veniam ipsa ea doloribus molestias.
              </p>
              <button style={btn} onClick={this.props.toggle}>
                Toggle Component 3
              </button>
            </div>
          </div>
        )}
      </Spring>
    )
  }
}

const c2Style = {
  background: 'slateblue',
  padding: '1.5rem',
  color: 'white'
}

const btn = {
  background: '#333',
  color: '#fff',
  padding: '1rem 2rem',
  border: 'none',
  textTransform: 'uppercase',
  margin: '15px 0'
}
export default Component2
