import React, { useState } from 'react'
import useDocumentTitle from './useDocumentTitle'

function Counter(props) {
  // const array = useState(0)
  // const count = array[0] // this.state.count
  // const setState = array[1] // this.setState()
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  useDocumentTitle(`${name} has click ${count} times`)

  // useEffect(() => {
  //   document.title = `${name} has clicked ${count} times`
  //   return () => {
  //     console.log('clean up')
  //   }
  // }, [count, name])
  // componentWillUnmount
  // dependence array

  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>
        {name} has clicked Counter: {count}
      </div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  )
}

export default Counter
