import './App.css'
import React from 'react'
import Nav from './compontents/Nav'
import Projects from "./compontents/Projects";
import ImageContainer from "./compontents/ImageContainer";
import Skills from "./compontents/Skills";
import Testimonals from "./compontents/Testimonals";
import CodersRankActivity from '@codersrank/activity';
import Github from "./compontents/Github";

// register web component as <codersrank-activity> element
window.customElements.define('codersrank-activity', CodersRankActivity);




function App() {
  return (
    <div className="App">
        <Nav />
        <ImageContainer />
        <Projects/>
        <Skills/>
        <Github/>
        <Testimonals/>

    </div>
  )
}

export default App
