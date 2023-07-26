import './App.css'
import React from 'react'
import Nav from './compontents/Nav'
import Projects from "./compontents/Projects";
import ImageContainer from "./compontents/ImageContainer";




function App() {
  return (
    <div className="App">
        <Nav />
        <ImageContainer />
        <Projects/>
    </div>
  )
}

export default App
