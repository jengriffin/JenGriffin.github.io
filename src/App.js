import React from 'react'
import ResumePage from './components/ResumePage'
import HomePage from './components/HomePage'
import Test from './components/Test'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <div className="App min-vh-100 d-flex justify-content-center align-items-center">
      <div>
        <Routes>
          <Route path="/test" elment={<Test />} />
          <Route path="/" elment={<HomePage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
