import './App.css'
import React from 'react'
import Nav from './compontents/Nav'
import Projects from "./compontents/Projects";
import ImageContainer from "./compontents/ImageContainer";
import Skills from "./compontents/Skills";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function App() {
  return (
    <div className="App">
        <Nav />
        <ImageContainer />
        <Projects/>
        <Skills/>
    </div>
  )
}

export default App
