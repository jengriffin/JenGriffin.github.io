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
             <ul className="social list-inline">
                 <li className="list-inline-item">
                     <img id="post" alt="PostgresSQL" data-bs-toggle="tooltip" title="PostgresSQL" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"/>
                 </li>
                 <li className="list-inline-item">
                     <img id="js" alt="Sequelize.js" data-bs-toggle="tooltip" title="Sequelize.js" src="data:image/png;base64,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"/>
                 </li>
                 <li className="list-inline-item">
                     <img id="jse" alt="Express.js" data-bs-toggle="tooltip" title="Express.js" src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"/>
                 </li>
                 <li className="list-inline-item">
                     <img id="js" alt="MongoDB" data-bs-toggle="tooltip" title="MongoDB" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJi-UxGs4sTXyd91CFtv5sFijJfuQotb61rg&usqp=CAU"/>
                 </li>
                 <li className="list-inline-item">
                     <img id="post" alt="Mongoose" data-bs-toggle="tooltip" title="Mongoose" src="https://ih1.redbubble.net/image.438912065.6243/flat,1000x1000,075,f.u3.jpg"/>
                 </li>
                 <li className="list-inline-item">
                     <img id="SQL" alt="TypeScript" data-bs-toggle="tooltip" title="TypeScript" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"/>
                 </li>
                 <li className="list-inline-item">
                     <img id="SQL" alt="MaterialUI" data-bs-toggle="tooltip" title="MaterialUI" src="https://mui.com/static/logo.png"/>
                 </li>
                 <li className="list-inline-item">
                     <img id="boot" alt="Bootstrap" data-bs-toggle="tooltip" title="Bootstrap" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png"/>
                 </li>
                 <li className="list-inline-item">
                     <img id="post" alt="Nifi" data-bs-toggle="tooltip" title="Nifi" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Apache-nifi-logo.svg/2560px-Apache-nifi-logo.svg.png"/>
                 </li>
             </ul>

          </div>
        </div>
      </aside>
    </div>
      </div>
  )
}
export default Skills