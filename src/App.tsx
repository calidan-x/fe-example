import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Login, TodoList, ModalTest } from '@/pages'
import { Loading } from '@/components'

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/modal-test" element={<ModalTest />} />
        </Routes>
      </BrowserRouter>
      <Loading />
    </>
  )
}

export default App
