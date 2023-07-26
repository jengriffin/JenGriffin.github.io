const Skills = () => {
  return(
      <div>
      <div className="widget shadow p-3 mb-5 bg-body rounded">

            <img class="img-fluid" src="https://cr-skills-chart-widget.azurewebsites.net/api/api?username=jengriffin"/>

      </div>

    <div className="container sections-wrapper py-5">

      <aside class="skills aside section">
        <div class="section-inner shadow-sm rounded ">
          <h2 class="heading"><a id="anchor_skills"></a>Skills</h2>
         <div class="content">
            <p class="intro">
              Some of the languages, and frameworks I have built with include:
            </p>
             <ul className="social list-inline">
                 <li className="list-inline-item">
                     <i className="fab fa-python fa-3x" id="python" alt="python" data-bs-toggle="tooltip" title="Python"></i>
                 </li>

                 <li className="list-inline-item">
                     <i className="fab fa-python fa-3x" id="python" alt="python" data-bs-toggle="tooltip" title="Python"></i>
                 </li>

                 <li className="list-inline-item last-item">
                     <a href="#">
                         <i className="fab fa-codepen border border-dark rounded-circle p-2"></i>
                     </a>
                 </li>
             </ul>
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
      </div>
  )
}
export default Skills