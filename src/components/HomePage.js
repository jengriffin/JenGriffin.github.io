const HomePage = (props) => {
  return (
    <div>
      <body>
        <header class="header">
          <div class="container">
            <div class="row align-items-center">
              <div class="col">
                <div class="profile-content">
                  <h1 class="name">Jennifer Griffin</h1>
                  <h2 class="desc">Full Stack Software Engineer</h2>
                  <ul class="social list-inline">
                    <li class="list-inline-item">
                      <a href="https://github.com/jengriffin">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="https://www.linkedin.com/in/jennifer-griffin12/">
                        <i class="fab fa-github-alt"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fab fa-stack-overflow"></i>
                      </a>
                    </li>
                    <li class="list-inline-item last-item">
                      <a href="#">
                        <i class="fab fa-codepen"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-md-auto">
                <div class="dark-mode-switch d-flex">
                  <div class="form-check form-switch mx-auto mx-md-0">
                    <input
                      type="checkbox"
                      class="form-check-input me-2"
                      id="darkSwitch"
                    />
                    <label class="custom-control-label" for="darkSwitch">
                      Dark Mode
                    </label>
                  </div>
                </div>
                <a
                  class="btn btn-cta-primary"
                  href="https://themes.3rdwavemedia.com/"
                  target="_blank"
                >
                  <i class="fas fa-paper-plane"></i> Contact Me
                </a>
              </div>
            </div>
          </div>
        </header>

        <div class="container sections-wrapper py-5">
          <div class="row">
            <div class="primary col-lg-8 col-12">
              <section class="about section">
                <div class="section-inner shadow-sm rounded">
                  <h2 class="heading">About Me</h2>
                  <div class="content">
                    <p>
                      Years of professional experience and a curious mind have
                      honed my dedication and persistence. As a software
                      engineer, I take a holistic approach to creating a final
                      product that not only incorporates the end user
                      experience, but analyzes how the efficiency of each step
                      of the process can be improved. I not only bring the
                      satisfaction that a task given to me is a task done to
                      your unique specifications, but I bring my own tea.
                    </p>
                  </div>
                </div>
              </section>

              <section class="latest section">
                <div class="section-inner shadow-sm rounded">
                  <h2 class="heading">Latest Projects</h2>
                  <div class="content">
                    <div class="item featured text-center">
                      <div class="featured-image has-ribbon">
                        <a
                          href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/launch-bootstrap-4-template-for-saas-businesses/"
                          target="_blank"
                        >
                          <img
                            class="img-fluid project-image rounded shadow-sm"
                            src="assets/images/projects/project-featured.jpg"
                            alt="project name"
                          />
                        </a>
                        <div class="ribbon">
                          <div class="text">New</div>
                        </div>
                      </div>

                      <h3 class="title mb-3">
                        <a
                          href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/launch-bootstrap-4-template-for-saas-businesses/"
                          target="_blank"
                        >
                          Launch - The perfect Bootstrap template for SaaS
                          products
                        </a>
                      </h3>

                      <div class="desc text-start">
                        <p>
                          You can promote your main project here. Suspendisse in
                          tellus dolor. Vivamus a tortor eu turpis pharetra
                          consequat quis non metus. Aliquam aliquam, orci eu
                          suscipit pellentesque, mauris dui tincidunt enim, eget
                          iaculis ante dolor non turpis. Ut enim ad minima
                          veniam, quis nostrum exercitationem ullam corporis
                          suscipit laboriosam.
                        </p>
                      </div>
                      <a
                        class="btn btn-cta-secondary"
                        href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/launch-bootstrap-4-template-for-saas-businesses/"
                        target="_blank"
                      >
                        <i class="fas fa-thumbs-up"></i> Back my project
                      </a>
                    </div>
                    <hr class="divider" />
                    <div class="item row">
                      <a
                        class="col-md-4 col-12"
                        href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/coderpro-bootstrap-4-startup-template-for-software-projects/"
                        target="_blank"
                      >
                        <img
                          class="img-fluid project-image rounded shadow-sm"
                          src="assets/images/projects/project-1.png"
                          alt="project name"
                        />
                      </a>
                      <div class="desc col-md-8 col-12">
                        <h3 class="title">
                          <a
                            href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/coderpro-bootstrap-4-startup-template-for-software-projects/"
                            target="_blank"
                          >
                            CoderPro - Boootstrap Startup Template For Software
                            Projects
                          </a>
                        </h3>
                        <p class="mb-2">
                          You can put one of your secondary projects here.
                          Suspendisse in tellus dolor. Vivamus a tortor eu
                          turpis pharetra consequat quis non metus. Aliquam
                          aliquam, orci eu suscipit pellentesque, mauris dui
                          tincidunt enim, eget iaculis ante dolor non turpis.
                        </p>
                        <p>
                          <a
                            class="more-link"
                            href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/coderpro-bootstrap-4-startup-template-for-software-projects/"
                            target="_blank"
                          >
                            <i class="fas fa-external-link-alt"></i>Find out
                            more
                          </a>
                        </p>
                      </div>
                    </div>

                    <div class="item row">
                      <a
                        class="col-md-4 col-12"
                        href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/devcard-bootstrap-4-vcard-portfolio-template-for-software-developers/"
                        target="_blank"
                      >
                        <img
                          class="img-fluid project-image rounded shadow-sm"
                          src="assets/images/projects/project-2.png"
                          alt="project name"
                        />
                      </a>
                      <div class="desc col-md-8 col-12">
                        <h3 class="title">
                          <a
                            href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/devcard-bootstrap-4-vcard-portfolio-template-for-software-developers/"
                            target="_blank"
                          >
                            DevCard - Boootstrap Portfolio Template for Software
                            Developers
                          </a>
                        </h3>
                        <p class="mb-2">
                          You can put one of your secondary projects here.
                          Suspendisse in tellus dolor. Vivamus a tortor eu
                          turpis pharetra consequat quis non metus. Aliquam
                          aliquam, orci eu suscipit pellentesque, mauris dui
                          tincidunt enim, eget iaculis ante dolor non turpis.
                        </p>
                        <p>
                          <a
                            class="more-link"
                            href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/devcard-bootstrap-4-vcard-portfolio-template-for-software-developers/"
                            target="_blank"
                          >
                            <i class="fas fa-external-link-alt"></i>Find out
                            more
                          </a>
                        </p>
                      </div>
                    </div>

                    <div class="item row">
                      <a
                        class="col-md-4 col-12"
                        href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/instance-bootstrap-portfolio-theme-for-developers/"
                        target="_blank"
                      >
                        <img
                          class="img-fluid project-image rounded shadow-sm"
                          src="assets/images/projects/project-3.png"
                          alt="project name"
                        />
                      </a>
                      <div class="desc col-md-8 col-12">
                        <h3 class="title">
                          <a
                            href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/instance-bootstrap-portfolio-theme-for-developers/"
                            target="_blank"
                          >
                            Instance - Boootstrap Portfolio Template for
                            Aspiring Full Stack Developers
                          </a>
                        </h3>
                        <p class="mb-2">
                          You can put one of your secondary projects here.
                          Suspendisse in tellus dolor. Vivamus a tortor eu
                          turpis pharetra consequat quis non metus. Aliquam
                          aliquam, orci eu suscipit pellentesque, mauris dui
                          tincidunt enim, eget iaculis ante dolor non turpis.
                        </p>
                        <p>
                          <a
                            class="more-link"
                            href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/instance-bootstrap-portfolio-theme-for-developers/"
                            target="_blank"
                          >
                            <i class="fas fa-external-link-alt"></i>Find out
                            more
                          </a>
                        </p>
                      </div>
                    </div>

                    <div class="item row">
                      <a
                        class="col-md-4 col-12"
                        href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/bootstrap-template-for-mobile-apps-nova-pro/"
                        target="_blank"
                      >
                        <img
                          class="img-fluid project-image rounded shadow-sm"
                          src="assets/images/projects/project-4.png"
                          alt="project name"
                        />
                      </a>
                      <div class="desc col-md-8 col-12">
                        <h3 class="title">
                          <a
                            href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/bootstrap-template-for-mobile-apps-nova-pro/"
                            target="_blank"
                          >
                            Nova Pro - Boootstrap Template for Mobile Startups
                          </a>
                        </h3>
                        <p class="mb-2">
                          You can put one of your secondary projects here.
                          Suspendisse in tellus dolor. Vivamus a tortor eu
                          turpis pharetra consequat quis non metus.
                        </p>
                        <p>
                          <a
                            class="more-link"
                            href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/bootstrap-template-for-mobile-apps-nova-pro/"
                            target="_blank"
                          >
                            <i class="fas fa-external-link-alt"></i>Find out
                            more
                          </a>
                        </p>
                      </div>
                    </div>
                    <div class="item row">
                      <a
                        class="col-md-4 col-12"
                        href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/devstudio-bootstrap-theme-for-web-development-agencies-and-developers/"
                        target="_blank"
                      >
                        <img
                          class="img-fluid project-image rounded shadow-sm"
                          src="assets/images/projects/project-5.png"
                          alt="project name"
                        />
                      </a>
                      <div class="desc col-md-8 col-12">
                        <h3 class="title">
                          <a
                            href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/devstudio-bootstrap-theme-for-web-development-agencies-and-developers/"
                            target="_blank"
                          >
                            DevStudio - Boootstrap Template for WebDev Agencies
                            and Freelance Developers
                          </a>
                        </h3>
                        <p class="mb-2">
                          {' '}
                          You can put one of your secondary projects here.
                          Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi
                          vel augue. Curabitur ullamcorper ultricies nisi.
                        </p>
                        <p>
                          <a
                            class="more-link"
                            href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/devstudio-bootstrap-theme-for-web-development-agencies-and-developers/"
                            target="_blank"
                          >
                            <i class="fas fa-external-link-alt"></i>Find out
                            more
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section class="projects section">
                <div class="section-inner shadow-sm rounded">
                  <h2 class="heading">Other Projects</h2>
                  <div class="content">
                    <div class="item">
                      <h3 class="title">
                        <a
                          href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/free-bootstrap4-resume-cv-template-for-developers-pillar/"
                          target="_blank"
                        >
                          Pillar - Free Boootstrap Resume/CV Template for
                          Developers
                        </a>{' '}
                        <span class="badge badge-theme">Free</span>
                      </h3>
                      <p class="summary">
                        Provide a brief description of your project. Ut enim ad
                        minima veniam, quis nostrum exercitationem ullam
                        corporis suscipit laboriosam, nisi ut aliquid ex ea
                        commodi consequatu.
                      </p>
                      <p>
                        <a
                          class="more-link"
                          href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/free-bootstrap4-resume-cv-template-for-developers-pillar/"
                          target="_blank"
                        >
                          <i class="fas fa-external-link-alt"></i>Download Now
                        </a>
                      </p>
                    </div>
                    <div class="item">
                      <h3 class="title">
                        <a
                          href="https://themes.3rdwavemedia.com/bootstrap-templates/speciality/devblog-free-bootstrap-4-blog-template-for-developers/"
                          target="_blank"
                        >
                          DevBlog - Free Boootstrap Blog Template for Developers
                        </a>{' '}
                        <span class="badge badge-theme">Free</span>
                      </h3>
                      <p class="summary">
                        Provide a brief description of your project. Maecenas
                        ornare ultricies risus, in fermentum augue consectetur
                        in. Vestibulum vitae mauris iaculis, sollicitudin velit
                        in, molestie nulla.{' '}
                      </p>
                      <p>
                        <a
                          class="more-link"
                          href="https://themes.3rdwavemedia.com/bootstrap-templates/speciality/devblog-free-bootstrap-4-blog-template-for-developers/"
                          target="_blank"
                        >
                          <i class="fas fa-external-link-alt"></i>Download Now
                        </a>
                      </p>
                    </div>
                    <div class="item">
                      <h3 class="title">
                        <a
                          href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/nova-bootstrap-landing-page-template-for-mobile-apps/"
                          target="_blank"
                        >
                          Nova - Free App Landing Page Template for App
                          Developers
                        </a>{' '}
                        <span class="badge badge-theme">Free</span>
                      </h3>
                      <p class="summary">
                        Provide a brief description of your project. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. In vel
                        purus enim. Etiam tortor felis, fermentum ac ultrices
                        sed.
                      </p>
                      <p>
                        <a
                          class="more-link"
                          href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/nova-bootstrap-landing-page-template-for-mobile-apps/"
                          target="_blank"
                        >
                          <i class="fas fa-external-link-alt"></i>Download Now
                        </a>
                      </p>
                    </div>

                    <a class="btn btn-cta-secondary" href="#">
                      More on GitHub <i class="fas fa-chevron-right pt-1"></i>
                    </a>
                  </div>
                </div>
              </section>

              <section class="experience section">
                <div class="section-inner shadow-sm rounded">
                  <h2 class="heading">Work Experience</h2>
                  <div class="content">
                    <div class="item">
                      <h3 class="title">
                        Co-Founder Lead Developer -{' '}
                        <span class="place">
                          <a href="#">Startup Hub</a>
                        </span>{' '}
                        <span class="year">(2022 - Present)</span>
                      </h3>
                      <p>
                        Aenean leo ligula, porttitor eu, consequat vitae,
                        eleifend ac, enim. Aliquam lorem ante, dapibus in,
                        viverra quis, feugiat a, tellus. Phasellus viverra nulla
                        ut metus varius laoreet. Donec vitae sapien ut libero
                        venenatis faucibus. Nullam quis ante. Etiam sit amet
                        orci eget eros faucibus tincidunt.
                      </p>
                    </div>
                    <div class="item">
                      <h3 class="title">
                        Software Engineer -{' '}
                        <span class="place">
                          <a href="#">Google</a>
                        </span>{' '}
                        <span class="year">(2019 - 2022)</span>
                      </h3>
                      <p>
                        Vivamus a tortor eu turpis pharetra consequat quis non
                        metus. Aliquam aliquam, orci eu suscipit pellentesque,
                        mauris dui tincidunt enim. Sed fringilla mauris sit amet
                        nibh. Donec sodales sagittis magna.
                      </p>
                    </div>

                    <div class="item">
                      <h3 class="title">
                        Software Engineer -{' '}
                        <span class="place">
                          <a href="#">eBay</a>
                        </span>{' '}
                        <span class="year">(2018 - 2019)</span>
                      </h3>
                      <p>
                        Maecenas tempus, tellus eget condimentum rhoncus, sem
                        quam semper libero, sit amet adipiscing sem neque sed
                        ipsum.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section class="github section">
                <div class="section-inner shadow-sm rounded">
                  <h2 class="heading">My GitHub</h2>
                  <p>
                    You can embed your GitHub contribution graph calendar using
                    IonicaBizau's{' '}
                    <a
                      href="https://github.com/IonicaBizau/github-calendar"
                      target="_blank"
                    >
                      GitHub Calendar
                    </a>{' '}
                    widget.
                  </p>

                  <div id="github-graph" class="github-graph"></div>

                  <p>
                    You can also embed your GitHub activities using Casey
                    Scarborough's{' '}
                    <a
                      href="https://github.com/caseyscarborough/github-activity"
                      target="_blank"
                    >
                      GitHub Activity Stream
                    </a>{' '}
                    widget.
                  </p>
                  {/* //Usage: https://caseyscarborough.com/projects/github-activity/                        */}
                  <div id="ghfeed" class="ghfeed"></div>
                </div>
              </section>
            </div>
            <div class="secondary col-lg-4 col-12">
              <aside class="info aside section">
                <div class="section-inner shadow-sm rounded">
                  <h2 class="heading sr-only">Resume</h2>
                  <div class="content">
                    <ul class="list-unstyled">
                      <li>
                        <i class="fas fa-map-marker-alt"></i>
                        <span class="sr-only">Location:</span>San Francisco, US
                      </li>
                      <li>
                        <i class="fas fa-envelope"></i>
                        <span class="sr-only">Email:</span>
                        <a href="#">jameslee@website.com</a>
                      </li>
                      <li>
                        <i class="fas fa-link"></i>
                        <span class="sr-only">Website:</span>
                        <a href="#">https://www.website.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>

              <aside class="skills aside section">
                <div class="section-inner shadow-sm rounded">
                  <h2 class="heading">Skills</h2>
                  <div class="content">
                    <p class="intro">
                      Intro about your skills goes here. Keep the list lean and
                      only show your primary skillset. You can always provide a
                      link to your Linkedin or Github profile so people can get
                      more info there.
                    </p>

                    <div class="skillset">
                      <div class="item">
                        <h3 class="level-title">
                          Python &amp; Django
                          <span
                            class="level-label"
                            data-bs-toggle="tooltip"
                            data-bs-placement="left"
                            title="You can use the tooltip to explain more about your skill level..."
                          >
                            <i class="fas fa-info-circle"></i>Expert
                          </span>
                        </h3>

                        <div class="level-bar progress">
                          <div
                            class="progress-bar level-bar-inner"
                            role="progressbar"
                            style="width: 96%"
                            aria-valuenow="96"
                            aria-valuemin="0"
                            aria-valuemax="96"
                          ></div>
                        </div>
                      </div>

                      <div class="item">
                        <h3 class="level-title">
                          Javascript &amp; jQuery
                          <span
                            class="level-label"
                            data-bs-toggle="tooltip"
                            data-bs-placement="left"
                            title="You can use the tooltip to explain more about your skill level..."
                          >
                            <i class="fas fa-info-circle"></i>Expert
                          </span>
                        </h3>
                        <div class="level-bar progress">
                          <div
                            class="progress-bar level-bar-inner"
                            role="progressbar"
                            style="width: 94%"
                            aria-valuenow="94"
                            aria-valuemin="0"
                            aria-valuemax="94"
                          ></div>
                        </div>
                      </div>

                      <div class="item">
                        <h3 class="level-title">
                          HTML5, CSS3, SASS &amp; LESS
                          <span
                            class="level-label"
                            data-bs-toggle="tooltip"
                            data-bs-placement="left"
                            title="You can use the tooltip to explain more about your skill level..."
                          >
                            <i class="fas fa-info-circle"></i>Expert
                          </span>
                        </h3>
                        <div class="level-bar progress">
                          <div
                            class="progress-bar level-bar-inner"
                            role="progressbar"
                            style="width: 93%"
                            aria-valuenow="93"
                            aria-valuemin="0"
                            aria-valuemax="96"
                          ></div>
                        </div>
                      </div>

                      <div class="item">
                        <h3 class="level-title">
                          Ruby on Rails
                          <span
                            class="level-label"
                            data-bs-toggle="tooltip"
                            data-placement="left"
                            title="You can use the tooltip to explain more about your skill level..."
                          >
                            <i class="fas fa-info-circle"></i>Pro
                          </span>
                        </h3>
                        <div class="level-bar progress">
                          <div
                            class="progress-bar level-bar-inner"
                            role="progressbar"
                            style="width: 86%"
                            aria-valuenow="86"
                            aria-valuemin="0"
                            aria-valuemax="96"
                          ></div>
                        </div>
                      </div>

                      <p>
                        <a class="more-link" href="#">
                          <i class="fas fa-external-link-alt"></i>More on GitHub
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </aside>

              <aside class="testimonials aside section">
                <div class="section-inner shadow-sm rounded">
                  <h2 class="heading">Testimonials</h2>
                  <div class="content">
                    <div class="item">
                      <blockquote class="quote">
                        <p>
                          <i class="fas fa-quote-left"></i>James is an excellent
                          software engineer and he is passionate about what he
                          does. You can totally count on him to deliver your
                          projects!
                        </p>
                      </blockquote>
                      <p class="source">
                        <span class="name">Tim Adams</span>
                        <br />
                        <span class="title">Curabitur commodo</span>
                      </p>
                    </div>

                    <p>
                      <a class="more-link" href="#">
                        <i class="fas fa-external-link-alt"></i>More on Linkedin
                      </a>
                    </p>
                  </div>
                </div>
              </aside>

              <aside class="education aside section">
                <div class="section-inner shadow-sm rounded">
                  <h2 class="heading">Education</h2>
                  <div class="content">
                    <div class="item">
                      <h3 class="title">
                        <i class="fas fa-graduation-cap"></i> MSc Computer
                        Science
                      </h3>
                      <h4 class="university">
                        University College London{' '}
                        <span class="year">(2017-2018)</span>
                      </h4>
                    </div>
                    <div class="item">
                      <h3 class="title">
                        <i class="fas fa-graduation-cap"></i> BSc Computer
                        Science
                      </h3>
                      <h4 class="university">
                        University of Bristol{' '}
                        <span class="year">(2013-2017)</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </aside>

              <aside class="languages aside section">
                <div class="section-inner shadow-sm rounded">
                  <h2 class="heading">Languages</h2>
                  <div class="content">
                    <ul class="list-unstyled">
                      <li class="item">
                        <span class="title">
                          <strong>English:</strong>
                        </span>
                        <span class="level">
                          Native Speaker <br class="visible-xs" />
                          <i class="fas fa-star"></i>{' '}
                          <i class="fas fa-star"></i>{' '}
                          <i class="fas fa-star"></i>{' '}
                          <i class="fas fa-star"></i>{' '}
                          <i class="fas fa-star"></i>{' '}
                        </span>
                      </li>
                      <li class="item">
                        <span class="title">
                          <strong>Spanish:</strong>
                        </span>
                        <span class="level">
                          Professional Proficiency{' '}
                          <br class="visible-sm visible-xs" />
                          <i class="fas fa-star"></i>{' '}
                          <i class="fas fa-star"></i>{' '}
                          <i class="fas fa-star"></i>{' '}
                          <i class="fas fa-star-half"></i>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>

              <aside class="blog aside section">
                <div class="section-inner shadow-sm rounded">
                  <h2 class="heading">Latest Blog Posts</h2>
                  <p>
                    You can use Sascha Depold's{' '}
                    <a
                      href="https://github.com/sdepold/jquery-rss"
                      target="_blank"
                    >
                      Vanilla RSS plugin
                    </a>{' '}
                    to pull in your blog post feeds.
                  </p>
                  <div id="rss-feeds" class="content"></div>
                </div>
              </aside>

              <aside class="list music aside section">
                <div class="section-inner shadow-sm rounded">
                  <h2 class="heading">Favourite coding music</h2>
                  <div class="content">
                    <ul class="list-unstyled">
                      <li>
                        <i class="fas fa-headphones"></i>{' '}
                        <a href="#">Etiam hendrerit urna nunc</a>
                      </li>
                      <li>
                        <i class="fas fa-headphones"></i>{' '}
                        <a href="#">Ut sollicitudin in mauris non auctor</a>
                      </li>
                      <li>
                        <i class="fas fa-headphones"></i>{' '}
                        <a href="#">Etiam hendrerit urna nunc</a>
                      </li>
                      <li>
                        <i class="fas fa-headphones"></i>{' '}
                        <a href="#">Duis et felis bibendum</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>

              <aside class="list conferences aside section">
                <div class="section-inner shadow-sm rounded">
                  <h2 class="heading">Conferences</h2>
                  <div class="content">
                    <ul class="list-unstyled">
                      <li>
                        <i class="far fa-calendar-alt"></i>{' '}
                        <a href="#" target="_blank">
                          WWDC 2030
                        </a>{' '}
                        (San Francisco)
                      </li>
                      <li>
                        <i class="far fa-calendar-alt"></i> <a href="#">Hive</a>{' '}
                        (Seattle)
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>

              <aside class="credits aside section">
                <div class="section-inner shadow-sm rounded">
                  <h2 class="heading">Credits</h2>
                  <div class="content">
                    <ul class="list-unstyled pb-2">
                      <li>
                        <a href="https://getbootstrap.com/" target="_blank">
                          <i class="fas fa-external-link-alt"></i>Bootstrap
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://fortawesome.github.io/Font-Awesome/"
                          target="_blank"
                        >
                          <i class="fas fa-external-link-alt"></i>FontAwesome
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/IonicaBizau/github-calendar"
                          target="_blank"
                        >
                          <i class="fas fa-external-link-alt"></i>GitHub
                          Calendar Plugin
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://caseyscarborough.com/projects/github-activity/"
                          target="_blank"
                        >
                          <i class="fas fa-external-link-alt"></i>GitHub
                          Activity Stream
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://github.com/sdepold/vanilla-rss"
                          target="_blank"
                        >
                          <i class="fas fa-external-link-alt"></i>Vanilla RSS
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/coliff/dark-mode-switch">
                          <i class="fas fa-external-link-alt"></i>Dark Mode
                          Switch
                        </a>
                      </li>
                    </ul>

                    <hr />

                    <p class="pt-2">
                      This Boootstrap portfolio template is handcrafted by UX
                      designer{' '}
                      <a
                        href="https://twitter.com/3rdwave_themes"
                        target="_blank"
                      >
                        Xiaoying Riley
                      </a>{' '}
                      at{' '}
                      <a
                        href="https://themes.3rdwavemedia.com/"
                        target="_blank"
                      >
                        3rd Wave Media
                      </a>{' '}
                      for developers and is <strong>FREE</strong> as long as you
                      keep the footer attribution link.
                    </p>
                    <p>
                      If you`d like to{' '}
                      <strong>
                        use this template without the attribution link
                      </strong>
                      , you can{' '}
                      <a
                        href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/free-bootstrap-portfolio-theme-for-web-developers/"
                        target="_blank"
                      >
                        buy the commercial license
                      </a>
                      .
                    </p>

                    <a
                      class="btn btn-cta-primary btn-download"
                      href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/free-bootstrap-theme-for-web-developers/"
                      target="_blank"
                    >
                      <i class="fas fa-download"></i> I want to download
                    </a>
                    <hr />
                    <h5 class="subheading pt-3">
                      Want more free Bootstrap themes and templates?
                    </h5>
                    <p>
                      Check out our{' '}
                      <a href="https://themes.3rdwavemedia.com/bootstrap-templates/free/">
                        collection of free themes and templates.
                      </a>
                    </p>
                    <p>
                      Follow{' '}
                      <a
                        href="https://twitter.com/3rdwave_themes"
                        target="_blank"
                      >
                        Xiaoying
                      </a>{' '}
                      on twitter so you don't miss any future freebies!
                    </p>

                    <a
                      class="btn btn-cta-secondary btn-follow"
                      href="https://twitter.com/3rdwave_themes"
                      target="_blank"
                    >
                      <i class="fab fa-twitter"></i> Follow on twitter
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
        <footer class="footer">
          <div class="container text-center">
            <small class="copyright">
              Designed with <span class="sr-only">love</span>
              <i class="fas fa-heart"></i> by{' '}
              <a href="https://themes.3rdwavemedia.com" target="_blank">
                Xiaoying Riley
              </a>{' '}
              for developers
            </small>
          </div>
        </footer>
        <script
          type="text/javascript"
          src="assets/plugins/popper.min.js"
        ></script>
        <script
          type="text/javascript"
          src="assets/plugins/bootstrap/js/bootstrap.min.js"
        ></script>
        <script
          type="text/javascript"
          src="assets/plugins/vanilla-rss/dist/rss.global.min.js"
        ></script>
        <script
          type="text/javascript"
          src="assets/plugins/dark-mode-switch/dark-mode-switch.min.js"
        ></script>

        <script
          type="text/javascript"
          src="assets/plugins/github-calendar/dist/github-calendar.min.js"
        ></script>

        <script
          type="text/javascript"
          src="//cdnjs.cloudflare.com/ajax/libs/mustache.js/0.7.2/mustache.min.js"
        ></script>
        <script
          type="text/javascript"
          src="assets/plugins/github-activity/src/github-activity.js"
        ></script>

        <script type="text/javascript" src="assets/js/main.js"></script>
      </body>
    </div>
  )
}
export default HomePage
