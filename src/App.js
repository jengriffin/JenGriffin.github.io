import ThemeSwitcher from './ThemeSwitcher'
import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Test from './compontents/Test'
import Resume from './compontents/Resume'

function App() {
  return (
    <div className="App min-vh-100 d-flex justify-content-center align-items-center">
      <div>
        <ThemeSwitcher />
      </div>

      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  )
}

export default App
