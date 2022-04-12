import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Login, TodoList, ModalTest, InputTest, SwitchTest, TabTest } from '@/pages'
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
          <Route path="/input-test" element={<InputTest />} />
          <Route path="/switch-test" element={<SwitchTest />} />
          <Route path="/tab-test" element={<TabTest />} />
        </Routes>
      </BrowserRouter>
      <Loading />
    </>
  )
}

export default App
