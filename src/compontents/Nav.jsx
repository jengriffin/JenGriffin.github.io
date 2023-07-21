import Projects from "./Projects";
import Test from "./Test";
import About from "./About";
const Nav = () => {
  return (
      <div className="navbar-wrapper">
    <div className="nav">
        <div className="container-fluid">
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Jennifer Griffin</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#about">About <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#anchor_skills">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#anchor_testimonials">Testimonials</a>
                    </li>
                </ul>
            </div>

        </nav>
        </div>
    </div>
      </div>
  )
}

export default Nav