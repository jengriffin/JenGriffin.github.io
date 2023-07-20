import form from "../assets/form.png";

const Latest = () => {
    return(
        <div id="projects" class="bg-light">
        <section className="latest section d-flex d-flex justify-content-center ">
            <div className="item row">
            <div className="section-inner shadow-sm rounded col-md-12 col-12">
                <h2 className="heading"><a id="anchor_projects"></a>Latest Projects</h2>
                <div className="content">
                    <div className="item featured text-center ">
                        <div className="featured-image has-ribbon">
                            <a
                                href="https://grow-it-notes.herokuapp.com/"
                                target="_blank"
                            >

                                <img
                                    className="img-fluid project-image rounded shadow-sm"
                                    src={form}
                                    id="latest"
                                    alt="Grow It"
                                />
                            </a>
                            <div className="ribbon">
                                <div className="text">New!</div>
                            </div>
                        </div>

                        <div className="desc text-start">
                            <p>
                                This app is for the gardner on the go! Now you can build your own personal digital
                                database of plants and keep notes about the changes in your gardren. Designed with
                                simple controls anyone can use this navigation friendly tool at thier computer or while
                                shopping for the next big project.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            </div>
        </section>
        </div>
    )
}

export default Latest