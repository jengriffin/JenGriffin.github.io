import cookbook from "../assets/reciepes-for-me.png";
import spaceman from "../assets/Spaceman.png";
import book from "../assets/book.png";
import latest from "./Latest";
import Latest from "./Latest";

const Projects =()=>{
return(
//     <section id="projects" class="bg-light">
//         <div class="container">
//             <Latest/>
//             <hr className="divider"/>
//     <a
//         class="btn btn-cta-secondary"
//         href="https://obscure-reef-40887.herokuapp.com/"
//         target="Recipes for Me"
//     >
//         <i class="fas fa-thumbs-up"></i>
//     </a>
// </div>
//     <hr class="divider" />
//     <div class="item row">
//         <a
//             class="col-md-4 col-12"
//             href="https://obscure-reef-40887.herokuapp.com/"
//             target="_blank"
//         >
//             <img
//                 class="img-fluid project-image rounded shadow-sm"
//                 src={cookbook}
//                 alt="Recipes for Me"
//             />
//         </a>
//         <div class="desc col-md-8 col-12">
//             <h3 class="title">
//                 <a
//                     href="https://obscure-reef-40887.herokuapp.com/"
//                     target="_blank"
//                 >
//                     The Modern Cookbook!
//                 </a>
//             </h3>
//             <p class="mb-2">
//                 A deployed full stack PERN application built in 5 days in a dev group of 4 software engineers that allows registered users to create and share recipe skills.
//                 My chief responsibilities were time management, working with the front-end team to build user authentication, protected routes, and user registration I also enforced good git hygiene on the front-end repo, communicating with the team to resolve merge conflicts, coordinate  pulls and pushes, and keeping the front-end up to date.
//                 Registered users can create, edit, and delete recipes, creating the recipes available to all visitors, as well as links to food pantries in the About section to address the rising cost of health food. To check it out put in a fake email and password and you're on your way! Make sure to check out the other developers to see what exciting new creations they have in store! Cedric Mun <a href="https://github.com/Aonmonomer">GitHub</a><a href="https://www.linkedin.com/in/cedricmun/"> LinkedIn</a>, Josh Langner <a href="https://github.com/jlangner87">GitHub</a> <a href="https://www.linkedin.com/in/josh-langner/"> LinkedIn,</a> Jackson McHugh <a href="https://github.com/Jacksonmchugh">GitHub </a> <a href="https://www.linkedin.com/in/jackson-mchugh/">LinkedIn.</a>
//
//             </p>
//
//         </div>
//     </div>
//
//     <div class="item row">
//         <a
//             class="col-md-4 col-12"
//             href="https://robust-boasts.surge.sh/"
//             target="_blank"
//         >
//             <img
//                 class="img-fluid project-image rounded shadow-sm"
//                 src=
//
//             />
//         </a>
//         <div class="desc col-md-8 col-12">
//             <h3 class="title">
//
//             </h3>
//             <p class="mb-2">
//
//
//             </p>
//
//         </div>
//     </div>
//
//     <div class="item row">
//         <a
//             class="col-md-4 col-12"
//             href="https://fast-basin-96068.herokuapp.com/"
//             target="_blank"
//         >
//             <img
//                 class="img-fluid project-image rounded shadow-sm"
//                 src={book}
//                 alt="children's book database"
//             />
//         </a>
//         <div class="desc col-md-8 col-12">
//             <h3 class="title">
//
//             </h3>
//             <p class="mb-2">
//
//
//             </p>
//         </div>
//     </div>
//     </section>
    <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
            <div className="card shadow h-100">
                <img src={spaceman} className="card-img-top" alt="Spaceman"/>
                    <div className="card-body">
                        <h5 className="card-title"> <a
                            href="https://robust-boasts.surge.sh/" target="_blank">Spaceman
                        </a></h5>
                        <p className="card-text">This front-end hangman game was built in 6 days utilizing JavaScript, CSS, and HTML 5 and is  structured to support early literacy and technology skills for children, covering 7 essential skills.
                            //                 The words are the 100 most frequently read encountered words for kindergarten. High contrast colors, straight font styling and various element sizes make important features stand out for learners new to digital interactions and those with various levels of visual acuity.
                            //                 The option to use a keyboard is given for learners who want to build keyboard awareness and those with motor disabilities.</p>
                    </div>
            </div>
        </div>
        <div className="col">
            <div className="card shadow h-100">
                <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a short card.</p>
                    </div>
            </div>
        </div>
        <div className="col">
            <div className="card shadow h-100">
                <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in
                            to additional content.</p>
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