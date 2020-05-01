import React, { useState } from 'react'
import Component1 from './component/Component1'
import Component2 from './component/Component2'
import Component3 from './component/Component3'
import { Transition, animated } from 'react-spring'

function App() {
  const [showComponent, setShowComponent] = useState(false)
  const toggle = () => {
    setShowComponent(!showComponent)
    return showComponent
  }
  return (
    <>
      <Component1 />
      <Component2 toggle={toggle} />
      <Transition
        native
        items={showComponent}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {(show) =>
          show &&
          ((props) => (
            <animated.div style={props}>
              <Component3 />
            </animated.div>
          ))
        }
      </Transition>
    </>
  )
}

export default App
