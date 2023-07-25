import cookbook from "../assets/reciepes-for-me.png";
import spaceman from "../assets/Spaceman.png";
import book from "../assets/book.png";
import latest from "./Latest";
import Latest from "./Latest";
import form from "../assets/form.png";

const Projects =()=>{
return(
    <div className="row row-cols-1 row-cols-md-3 g-4"id="projects">
        <div className="col">
            <div className="card shadow h-100">
                <img src={spaceman} className="card-img-top" alt="Spaceman"/>
                    <div className="card-body">
                        <h5 className="card-title"> <a
                            href="https://robust-boasts.surge.sh/" target="_blank">Spaceman
                        </a></h5>
                        <p className="card-text">This front-end hangman game was built in 6 days utilizing JavaScript, CSS, and HTML 5 and is  structured to support early literacy and technology skills for children, covering 7 essential skills.
                                             The words are the 100 most frequently read encountered words for kindergarten. High contrast colors, straight font styling and various element sizes make important features stand out for learners new to digital interactions and those with various levels of visual acuity.
                                             The option to use a keyboard is given for learners who want to build keyboard awareness and those with motor disabilities.</p>
                    </div>
            </div>
        </div>
        <div className="col">
            <div className="card shadow h-100">
                <img src={cookbook} className="card-img-top" alt="Recipes for Me"/>
                    <div className="card-body">
                        <h5 className="card-title">
                            <a href="https://obscure-reef-40887.herokuapp.com/" target="_blank">
                                The Modern Cookbook!
                            </a></h5>
                        <p className="card-text">A deployed full stack PERN application built in 5 days in a dev group of 4 software engineers that allows registered users to create and share recipe skills.
                                             My chief responsibilities were time management, working with the front-end team to build user authentication, protected routes, and user registration I also enforced good git hygiene on the front-end repo, communicating with the team to resolve merge conflicts, coordinate  pulls and pushes, and keeping the front-end up to date.
                                             Registered users can create, edit, and delete recipes, creating the recipes available to all visitors, as well as links to food pantries in the About section to address the rising cost of health food. To check it out put in a fake email and password and you're on your way! Make sure to check out the other developers to see what exciting new creations they have in store! Cedric Mun <a href="https://github.com/Aonmonomer">GitHub</a><a href="https://www.linkedin.com/in/cedricmun/"> LinkedIn</a>, Josh Langner <a href="https://github.com/jlangner87">GitHub</a> <a href="https://www.linkedin.com/in/josh-langner/"> LinkedIn,</a> Jackson McHugh <a href="https://github.com/Jacksonmchugh">GitHub </a> <a href="https://www.linkedin.com/in/jackson-mchugh/">LinkedIn.</a>
                            </p>
                    </div>
            </div>
        </div>
        <div className="col">
            <div className="card shadow h-100">
                <img src={form} className="card-img-top" alt="Grow It"/>
                    <div className="card-body">
                        <h5 className="card-title">  <a
                            href="https://grow-it-notes.herokuapp.com/"
                            target="_blank"
                        ></a></h5>
                        <p className="card-text"> This app is for the gardner on the go! Now you can build your own personal digital
                            database of plants and keep notes about the changes in your gardren. Designed with
                            simple controls anyone can use this navigation friendly tool at thier computer or while
                            shopping for the next big project.</p>
                    </div>
            </div>
        </div>
        <div className="col">
            <div className="card shadow h-100">
                <img src={book} className="card-img-top"  alt="children's book database"/>
                    <div className="card-body">
                        <h5 className="card-title"><a
                            href="https://fast-basin-96068.herokuapp.com/" target="_blank">Children's Book Database
                        </a></h5>
                        <p className="card-text">A full stack MERN application built in 6 days with 4 user interactive methods. Built an Express server from scratch using Javascript, MongoDB, Mongoose HTML 5, CSS and React.</p>
                    </div>
            </div>
        </div>
    </div>




)

}
export default Projects

    // <div className="card shadow">
    //     <img className="w-100 border-bottom" src=/>
    //     <div className="card-body">
    //         <h5 className="card-title">
    //
    //         </h5>
    //         <p className="card-text"></p>
    //     </div>
    // </div>