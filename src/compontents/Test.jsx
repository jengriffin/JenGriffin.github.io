import { NavLink} from "react-router-dom"
import spaceman from '../assets/Spaceman.png'
import book from '../assets/book.png'
import form from '../assets/form.png'
import cookbook from '../assets/reciepes-for-me.png'
const Test = () => {
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

  return (
    <div>
    <header class="header">
    <div class="container">
      <div class="row align-items-center">
        <div class="col">
          <div class="profile-content">
            <h1 class="name">Jennifer Griffin</h1>
            <h2 class="desc">Full Stack Software Engineer</h2>
            <ul class="social list-inline">
              <li class="list-inline-item">
                <a href="https://github.com/jengriffin">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.linkedin.com/in/jennifer-griffin12/">
                  <i class="fab fa-github-alt"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-stack-overflow"></i>
                </a>
              </li>
              <li class="list-inline-item last-item">
                <a href="#">
                  <i class="fab fa-codepen"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-auto">
          <div class="dark-mode-switch d-flex">
            <div class="form-check form-switch mx-auto mx-md-0">
              
            </div>
          </div>
        
            <i class="fas fa-paper-plane"></i> <button type="button" class="btn btn-success btn-lg mb-2" size="lg" onClick={onButtonClick}>Download Resume</button>
          
        </div>
      </div>
    </div>
  </header>
  
  <div class="container sections-wrapper py-5">
    <div class="row">
      <div class="primary col-lg-8 col-12">
        <section class="about section">
          <div class="section-inner shadow-sm rounded">
            <h2 class="heading">About Me</h2>
            <div class="content">
              <p>
                Years of professional experience and a curious mind have
                honed my dedication and persistence. As a software
                engineer, I take a holistic approach to creating a final
                product that not only incorporates the end user
                experience, but analyzes how the efficiency of each step
                of the process can be improved. I not only bring the
                satisfaction that a task given to me is a task done to
                your unique specifications, but I bring my own tea.
              </p>
            </div>
          </div>
          </section>
      </div>
  </div>
        

        <section class="latest section">
          <div class="section-inner shadow-sm rounded">
            <h2 class="heading">Latest Projects</h2>
            <div class="content">
              <div class="item featured text-center">
                <div class="featured-image has-ribbon">
                  <a
                    href="https://grow-it-notes.herokuapp.com/"
                    target="_blank"
                  >
                    <img
                      class="img-fluid project-image rounded shadow-sm"
                      src={form}
                      alt="Grow It"
                    />
                  </a>
                  <div class="ribbon">
                    <div class="text">New!</div>
                  </div>
              </div>

                <div class="desc text-start">
                  <p>
                    This app is for the gardner on the go! Now you can build your own personal digital database of plants and keep notes about the changes in your gardren. Designed with simple controls anyone can use this navigation friendly tool at thier computer or while shopping for the next big project.
                  </p>
                </div>
                <a
                  class="btn btn-cta-secondary"
                  href="https://obscure-reef-40887.herokuapp.com/"
                  target="Recipes for Me"
                >
                  <i class="fas fa-thumbs-up"></i>
                </a>
              </div>
              <hr class="divider" />
              <div class="item row">
                <a
                  class="col-md-4 col-12"
                  href="https://obscure-reef-40887.herokuapp.com/"
                  target="_blank"
                >
                  <img
                    class="img-fluid project-image rounded shadow-sm"
                    src={cookbook}
                    alt="Recipes for Me"
                  />
                </a>
                <div class="desc col-md-8 col-12">
                  <h3 class="title">
                    <a
                      href="https://obscure-reef-40887.herokuapp.com/"
                      target="_blank"
                    >
                      The Modern Cookbook!
                    </a>
                  </h3>
                  <p class="mb-2">
                      A deployed full stack PERN application built in 5 days in a dev group of 4 software engineers that allows registered users to create and share recipe skills.
                      My chief responsibilities were time management, working with the front-end team to build user authentication, protected routes, and user registration I also enforced good git hygiene on the front-end repo, communicating with the team to resolve merge conflicts, coordinate  pulls and pushes, and keeping the front-end up to date.
                      Registered users can create, edit, and delete recipes, creating the recipes available to all visitors, as well as links to food pantries in the About section to address the rising cost of health food. To check it out put in a fake email and password and you're on your way! Make sure to check out the other developers to see what exciting new creations they have in store! Cedric Mun <a href="https://github.com/Aonmonomer">GitHub</a><a href="https://www.linkedin.com/in/cedricmun/"> LinkedIn</a>, Josh Langner <a href="https://github.com/jlangner87">GitHub</a> <a href="https://www.linkedin.com/in/josh-langner/"> LinkedIn,</a> Jackson McHugh <a href="https://github.com/Jacksonmchugh">GitHub </a> <a href="https://www.linkedin.com/in/jackson-mchugh/">LinkedIn.</a>
                      
                  </p>
        
                </div>
              </div>

              <div class="item row">
                <a
                  class="col-md-4 col-12"
                  href="https://robust-boasts.surge.sh/"
                  target="_blank"
                >
                  <img
                    class="img-fluid project-image rounded shadow-sm"
                    src={spaceman}
                    alt="Spaceman"
                  />
                </a>
                <div class="desc col-md-8 col-12">
                  <h3 class="title">
                    <a
                      href="https://robust-boasts.surge.sh/"
                      target="_blank"
                    >
                      Spaceman
                    </a>
                  </h3>
                  <p class="mb-2">
                      This front-end hangman game was built in 6 days utilizing JavaScript, CSS, and HTML 5 and is  structured to support early literacy and technology skills for children, covering 7 essential skills.
                      The words are the 100 most frequently read encountered words for kindergarten. High contrast colors, straight font styling and various element sizes make important features stand out for learners new to digital interactions and those with various levels of visual acuity.
                      The option to use a keyboard is given for learners who want to build keyboard awareness and those with motor disabilities.
                      
                  </p>
          
                </div>
              </div>

              <div class="item row">
                <a
                  class="col-md-4 col-12"
                  href="https://fast-basin-96068.herokuapp.com/"
                  target="_blank"
                >
                  <img
                    class="img-fluid project-image rounded shadow-sm"
                    src={book}
                    alt="children's book database"
                  />
                </a>
                <div class="desc col-md-8 col-12">
                  <h3 class="title">
                    <a
                      href="https://fast-basin-96068.herokuapp.com/"
                      target="_blank"
                    >
                    Children's Book Database
                    </a>
                  </h3>
                  <p class="mb-2">
                      A full stack MERN application built in 6 days with 4 user interactive methods.
                      Built an Express server from scratch using Javascript, MongoDB, Mongoose HTML 5, CSS and React.
                      
                  </p>
                </div>
                </div>
                </div>
                </div>
          </section>     
        

            

        <aside class="skills aside section">
          <div class="section-inner shadow-sm rounded ">
            <h2 class="heading">Skills</h2>
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
            <h2 class="heading">Testimonials</h2>
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
