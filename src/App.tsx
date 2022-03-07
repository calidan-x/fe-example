import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Login, TodoList } from './pages'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="todo" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
