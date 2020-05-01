import React from 'react'
import { Spring } from 'react-spring/renderprops'

const Component1 = () => {
  return (
    <Spring from={{ opacity: 0, marginTop: -500 }} to={{ opacity: 1, marginTop: 0 }}>
      {(props) => (
        <div style={props}>
          <div style={c1Style}>
            <h1>Component1</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum
              nobis reiciendis aliquid dignissimos ab inventore. At fugit, excepturi unde
              asperiores doloribus rem culpa recusandae, deleniti iure id quos quae.
            </p>
            <Spring from={{ number: 0 }} to={{ number: 10 }} config={{ duration: 10000 }}>
              {(props) => (
                <div>
                  <h1>{props.number.toFixed()}</h1>
                </div>
              )}
            </Spring>
          </div>
        </div>
      )}
    </Spring>
  )
}

const c1Style = {
  background: 'steelblue',
  padding: '1.5rem',
  color: 'white'
}

export default Component1
