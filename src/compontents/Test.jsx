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
            <h1 class="name"><a id="anchor_top"></a>Jennifer Griffin</h1>
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

      <div className="container sections-wrapper py-5">

        <section class="latest section">
          <div class="section-inner shadow-sm rounded">
            <h2 class="heading"><a id="anchor_projects"></a>Latest Projects</h2>
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

                </div>
                </div>
                </div>
          </section>     
        

            

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
