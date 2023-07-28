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




  </div>

      )
}
export default Test
