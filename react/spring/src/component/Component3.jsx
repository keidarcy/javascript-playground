import React from 'react'
import { Spring } from 'react-spring/renderprops'

const Component3 = ({ status }) => {
  const from = status ? 'hidden' : 'visible'
  const to = status ? 'visible' : 'hidden'
  console.log(from, to)
  return (
    <>
      {/* <Spring from={{ visibility: from }} to={{ visibility: to }}> */}
      <div style={c3style}>
        <h1>Component3</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consequuntur
          illo sequi vel dolores nesciunt, reprehenderit id commodi consequatur qui harum,
          architecto nisi iure repellat cupiditate, amet exercitationem esse asperiores?
        </p>
      </div>
      {/* </Spring> */}
    </>
  )
}

const c3style = {
  background: 'skyblue',
  color: 'white',
  padding: '1.5rem 1.5rem 5rem 1.5rem'
}

export default Component3
