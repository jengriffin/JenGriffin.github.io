import { NavLink} from "react-router-dom"
import About from "./About";
import Projects from "./Projects";
const Test = () => {


  return (
    <div className="profile-content-container">
    <header class="rounded-3 row align-items-lg-start">
        <div class="col">
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
              <li class="list-inline-item last-item">
                <a href="#">
                  <i class="fab fa-codepen border border-dark rounded-circle p-2"></i>
                </a>
              </li>
            </ul>

          </div>
    </div>
  </header>



  {/*<aside class="testimonials aside section">*/}
  {/*  <div class="section-inner shadow-sm rounded">*/}
  {/*    <h2 class="heading"><a id="anchor_testimonials"></a>Testimonials</h2>*/}
  {/*    <div class="content">*/}
  {/*      <div class="item">*/}
  {/*        <blockquote class="quote">*/}
  {/*          <p>*/}
  {/*            <i class="fas fa-quote-left"></i>Jennifer and I worked together on a development team for a full stack project at General Assembly. Her attention to detail and determination saw to it that we were able to successfully deploy our project.*/}
  {/*          </p>*/}
  {/*        </blockquote>*/}
  {/*        <p class="source">*/}
  {/*          <span class="name">Joshua Langner</span>*/}
  {/*          <br />*/}
  {/*          <span class="title">Software Engineer</span>*/}
  {/*        </p>*/}
  {/*      </div>*/}
  {/*    </div>*/}

  {/*    <p>*/}
  {/*      <a class="more-link" href="https://www.linkedin.com/in/jennifer-griffin12/">*/}
  {/*        <i class="fas fa-external-link-alt"></i>More on Linkedin*/}
  {/*      </a>*/}
  {/*    </p>*/}
  {/*  </div>*/}

  {/*</aside>*/}
  {/*</div>*/}
  </div>

      )
}
export default Test
