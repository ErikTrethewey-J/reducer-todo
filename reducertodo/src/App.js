import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { ADD__TODO, REMOVE__COMPLETED, TOGGLE__COMPLETED } from './state/action'
function App() {
  const state = useSelector((state) => state)
  const [form, setForm] = useState('')
  const dispatch = useDispatch();
  console.log('this is state', state)

  const addTodo = (e) => {
    console.log("fired!")
    e.preventDefault();
    const newTodo = {
      item: form,
      completed: false,
      id: Date.now()
    }
    dispatch({ type: ADD__TODO, payload: newTodo })
  }

  const handleComplete = (id) => {
    dispatch({ type: TOGGLE__COMPLETED, payload: id })
  };

  return (
    <div className="App">
      <h1>{state.name}'s Todo's</h1>
      <input value={form} onChange={(e) => setForm(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={() => dispatch({ type: REMOVE__COMPLETED })}>Clear Completed</button>
      {state.todos.map(todo => <h3 onClick={() => handleComplete(todo.id)} key={todo.id}>{todo.item}</h3>)}
    </div>
  );
}

export default App;
