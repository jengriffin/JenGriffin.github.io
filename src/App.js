import './App.css'
import React from 'react'
import Nav from './compontents/Nav'
import Projects from "./compontents/Projects";
import ImageContainer from "./compontents/ImageContainer";
import Skills from "./compontents/Skills";
import Testimonals from "./compontents/Testimonals";




function App() {
  return (
    <div className="App">
        <Nav />
        <ImageContainer />
        <Projects/>
        <Skills/>
        <Testimonals/>
    </div>
  )
}

export default App
