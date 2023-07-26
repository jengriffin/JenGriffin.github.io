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
                     <i className="fab fa-vuejs fa-3x" id="vue" alt="Vue.js" data-bs-toggle="tooltip" title="Vue.js"></i>
                 </li>

                 <li className="list-inline-item">
                     <i className="fab fa-react fa-3x fa-spin" id="react" alt="React" data-bs-toggle="tooltip" title="React.js"></i>
                 </li>
                 <li className="list-inline-item">
                     <img id="js" alt="Java Script" data-bs-toggle="tooltip" title="Java Script" src="https://wsrv.nl/?url=https%3A%2F%2Fcodedamn-blog.s3.amazonaws.com%2Fwp-content%2Fuploads%2F2022%2F03%2F07094700%2Fjs1.png&w=200&q=75&output=webp"/>
                 </li>
                 <li className="list-inline-item">
                     <img id="dj" alt="Django" data-bs-toggle="tooltip" title="Django" src="https://seeklogo.com/images/D/django-logo-4C5ECF7036-seeklogo.com.png"/>
                 </li>
                 <li className="list-inline-item">
                     <img id="SQL" alt="SQL" data-bs-toggle="tooltip" title="SQL" src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"/>
                 </li>
             </ul>
             <ul>
              <li class="list-group-item">Django</li>
              <li class="list-group-item">SQL</li>
              <li class="list-group-item">PostgresSQL</li>
              <li class="list-group-item">Sequelize.js</li>
              <li class="list-group-item">Express.js</li>
              <li class="list-group-item">MongoDB</li>
              <li class="list-group-item">Mongoose</li>
              <li class="list-group-item">JavaScript</li>


            </ul>

          </div>
        </div>
      </aside>
    </div>
      </div>
  )
}
export default Skills