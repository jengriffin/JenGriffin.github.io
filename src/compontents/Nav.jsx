import Test from "./Test"
const Nav = () => {
  return (
    <div className="nav">
      <div className="sidenav_bar">
        <a href="#anchor_about">&#160; <img className="nav_icon" /> &#160; About</a>
        <a href="#anchor_projects">&#160;<img className="nav_icon"/> &#160;Projects</a>
        <a href="#anchor_skills">&#160;<img className="nav_icon"/> &#160;Skills</a>
        <a href="#anchor_testimonials">&#160;<img className="nav_icon"/> &#160;Testimonals</a>
        {/* <a href="#anchor_contact">&#160;<img className="nav_icon" src={contact}/> &#160;Contact</a> */}
        <a href="#anchor_top">&#160;<img className="nav_icon"/> &#160;Top</a>  
      </div>  
    </div>
  )
}

export default Nav