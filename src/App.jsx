import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-screen p-2 bg-slate-900 w-full text-white'>
    <h1 className='text-3xl text-center mt-6'>Redux Todo App</h1>
    <AddTodo />
    <Todos />
    </div>
    </>
  )
}

export default App
