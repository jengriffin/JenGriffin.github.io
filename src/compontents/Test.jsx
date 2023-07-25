import { NavLink} from "react-router-dom"
import spaceman from '../assets/Spaceman.png'
import book from '../assets/book.png'
import form from '../assets/form.png'
import cookbook from '../assets/reciepes-for-me.png'
import About from "./About";
import Projects from "./Projects";
const Test = () => {


  return (
    <div>
    <header class="p-40 my-2 rounded-3 ">
    <div class="">
      <div class="">
        <div class="col-lg-50 align-items-center">
          <div class="profile-content">
            <h1 class="name">Jennifer Griffin</h1>
            <h2 class="desc">Full Stack Software Engineer</h2>
            <ul class="social list-inline">
              <li class="list-inline-item">
                <a href="https://github.com/jengriffin">
                  <i class="fab fa-linkedin-in border border-dark rounded-circle p-2"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.linkedin.com/in/jennifer-griffin12/">
                  <i class="fab fa-github-alt border border-dark rounded-circle p-2"></i>
                </a>
              </li>
              {/*<li class="list-inline-item">*/}
              {/*  <a href="#">*/}
              {/*    <i class="fab fa-stack-overflow border border-dark rounded-circle p-2"></i>*/}
              {/*  </a>*/}
              {/*</li>*/}
              <li class="list-inline-item last-item">
                <a href="#">
                  <i class="fab fa-codepen border border-dark rounded-circle p-2"></i>
                </a>
              </li>
            </ul>
              <About/>

          </div>
        </div>
        <div class="col-12 col-md-auto">
          <div class="dark-mode-switch d-flex">
            <div class="form-check form-switch mx-auto mx-md-0">
              
            </div>
          </div>
        

          
        </div>
      </div>
    </div>
  </header>

  <hr className="hr"/>
  <div className="container sections-wrapper py-5">

    <aside class="skills aside section">
      <div class="section-inner shadow-sm rounded ">
        <h2 class="heading"><a id="anchor_skills"></a>Skills</h2>
        <div class="content">
          <p class="intro">
            Some of the languages, and frameworks I have built with include:
          </p>
          <ul>
            <li class="list-group-item">Django</li>
            <li class="list-group-item">Vue.js</li>
            <li class="list-group-item">SQL</li>
            <li class="list-group-item">PostgresSQL</li>
            <li class="list-group-item">Sequelize.js</li>
            <li class="list-group-item">Express.js</li>
            <li class="list-group-item">MongoDB</li>
            <li class="list-group-item">Mongoose</li>
            <li class="list-group-item">React.js</li>
            <li class="list-group-item">Python</li>
            <li class="list-group-item">JavaScript</li>
            <li class="list-group-item">HTML 5</li>
            <li class="list-group-item">CSS</li>


          </ul>

        </div>
      </div>
    </aside>
  </div>


  <aside class="testimonials aside section">
    <div class="section-inner shadow-sm rounded">
      <h2 class="heading"><a id="anchor_testimonials"></a>Testimonials</h2>
      <div class="content">
        <div class="item">
          <blockquote class="quote">
            <p>
              <i class="fas fa-quote-left"></i>Jennifer and I worked together on a development team for a full stack project at General Assembly. Her attention to detail and determination saw to it that we were able to successfully deploy our project.
            </p>
          </blockquote>
          <p class="source">
            <span class="name">Joshua Langner</span>
            <br />
            <span class="title">Software Engineer</span>
          </p>
        </div>
      </div>

      <p>
        <a class="more-link" href="https://www.linkedin.com/in/jennifer-griffin12/">
          <i class="fas fa-external-link-alt"></i>More on Linkedin
        </a>
      </p>
    </div>

  </aside>
    </div>

      )
}
export default Test
