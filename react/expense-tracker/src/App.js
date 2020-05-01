import React, { useState } from 'react'

const TodoItem = ({ index, name, complete, removeTodo, completeTodo }) => {
  return (
    <>
      <li style={{ textDecoration: complete ? 'line-through' : '' }}>
        {name}{' '}
        <span>
          {!complete && <button onClick={() => completeTodo(index)}>finish</button>}
        </span>
        <span>
          <button onClick={() => removeTodo(index)}>remove</button>
        </span>
      </li>
    </>
  )
}

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value) return
    addTodo(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} placeholder="NNNOOOOO" onChange={handleChange} />
    </form>
  )
}

const App = () => {
  const [todos, setTodos] = useState([
    { name: 'wash dishes', complete: false },
    { name: 'clean room', complete: false },
    { name: 'learn react', complete: false },
    { name: 'draw picture', complete: false }
  ])
  const addTodo = (text) => {
    const newTodos = [...todos, { name: text, complete: false }]
    setTodos(newTodos)
  }

  const completeTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].complete = true
    setTodos(newTodos)
  }
  const removeTodo = (index) => {
    let newTodos = [...todos]
    newTodos = newTodos.filter((t, num) => num !== index)
    setTodos(newTodos)
  }
  return (
    <>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            name={todo.name}
            complete={todo.complete}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
      <TodoForm addTodo={addTodo} />
    </>
  )
}

export default App
