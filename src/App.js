import ThemeSwitcher from './ThemeSwitcher'
import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Test from './compontents/Test'
import Resume from './compontents/Resume'
// import { Griffin } from './assets/Griffin.pdf'
const onButtonClick = () => {
  // using Java Script method to get PDF file
  fetch('Griffin.pdf').then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob)
      // Setting various property values
      let alink = document.createElement('a')
      alink.href = fileURL
      alink.download = 'Griffin.pdf'
      alink.click()
    })
  })
}
function App() {
  return (
    <div className="App min-vh-100 d-flex justify-content-center align-items-center">
      <div>
        <ThemeSwitcher />
      </div>
      <button onClick={onButtonClick}>Download PDF</button>
      {/* <Resume pdf={Griffin} /> */}

      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  )
}

export default App
