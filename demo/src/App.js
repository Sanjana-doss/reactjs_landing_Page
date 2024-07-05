import "./App.css";

function App() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div class="container-fluid">
          <nav class="navbar-brand" href="#">
            <img
              src="./Image(2).png"
              alt="Logo"
              width="100"
              height="100"
              class="img-fluid d-inline-block align-text-top ms-5 large-image"
            />
          </nav>
          <button
            class="navbar-toggler me-4"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon "></span>
          </button>
          <div
            class="offcanvas offcanvas-end "
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <button
                type="button"
                class="btn-close "
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <nav
                    class="nav-link active fs-5"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </nav>
                </li>
                <li class="nav-item">
                  <nav class="nav-link active fs-5 pe-5" href="#">
                    Work
                  </nav>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div class="d-flex flex-column align-items-center container-bg justify-content-center text-center ">
        <div class="d-flex flex-row align-items-center  justify-content-center text-center ">
          <p class="display-1">
            Hi,Welcome to <br /> Thinkinfinity !
          </p>
          <img src="./Sign of the Horns.png" alt="" class="img-fluid" />
        </div>
        <img src="./Scroll Button.png" alt="" class="img-fluid mt-5" />
      </div>
      <div class="container-sm p-5">
        <img
          src="./work.png"
          alt=""
          class="image-fluid w-100 w-sm-75 w-md-50 w-lg-25"
        />
      </div>
      <div
        class="card container  "
        style={{ border: "none", borderRadius: "15px" }}
      >
        <img src="./Image Background.png" class="card-img " alt="..." />
        <div class="card-img-overlay  d-flex flex-column justify-content-center align-items-start ms-5">
          <p class=" display-5 f">
            National Service Scheme <br /> For The App Made Easy <br />{" "}
          </p>
          <img src="./Tag.png" alt="" class="overlay-image2 pb-2" />
          <p class="card-text text-light-emphasis fs-4">
            App facilitates to track and oversee the smooth <br /> functioning
            of the committees.
          </p>
          <nav href="#" class="btn p-0">
            <img src="./Button.png" class="img-fluid" alt="." />
          </nav>
        </div>
      </div>
      <div
        class="card container pt-5 "
        style={{ border: "none", borderRadius: "15px" }}
      >
        <img src="./Background(5).png" class="card-img " alt="..." />
        <div class="card-img-overlay  d-flex flex-column justify-content-center align-items-start ms-5">
          <p class=" display-6 f">
            US Headquarter <br /> Logistics, Supply chain <br /> and E-Commerce{" "}
            <br /> Organization
          </p>
          <img src="./Tag.png" alt="" class="overlay-image2 pb-2" />
          <p class="card-text text-light-emphasis fs-4">
            Order management system for their B2B e <br />
            -commerce business.Streamline their supply <br /> chain management.
          </p>
          <nav href="#" class="btn p-0">
            <img src="./Button.png" class="img-fluid" alt="." />
          </nav>
        </div>
      </div>
      <div
        class="card container pt-5 "
        style={{ border: "none", borderRadius: "15px" }}
      >
        <img src="./Background(6).png" class="card-img " alt="..." />
        <div class="card-img-overlay  d-flex flex-column justify-content-center align-items-start ms-5">
          <p class=" display-5 f">
            UK Headquarter cross <br /> border PE firm
          </p>
          <img src="./Tag.png" alt="" class="overlay-image2 pb-2" />
          <p class="card-text text-light-emphasis fs-4">
            The cross-border innovation fund aims to <br /> transfer technology
            between the UK and India,
            <br /> the top ranking unicorn countries of the world.
          </p>
          <nav href="#" class="btn p-0">
            <img src="./Button.png" class="img-fluid" alt="." />
          </nav>
        </div>
      </div>
      <div
        class="card container pt-5 "
        style={{ border: "none", borderRadius: "15px" }}
      >
        <img src="./background(8).png" class="card-img " alt="..." />
        <div class="card-img-overlay  d-flex flex-column justify-content-center align-items-start ms-5">
          <p class=" display-5 f">
            SBCID - Government <br /> Organization
          </p>
          <img src="./Tag.png" alt="" class="overlay-image2 pb-2" />
          <p class="card-text text-light-emphasis fs-4">
            Customized methods for displaying your data <br /> and managing
            information via personalized <br /> dashboards.
          </p>
          <nav href="#" class="btn p-0">
            <img src="./Button.png" class="img-fluid" alt="." />
          </nav>
        </div>
      </div>
      <div class="container-sm p-5">
        <img
          src="./service.png"
          alt=""
          class="image-fluid w-100 w-sm-75 w-md-50 w-lg-25"
        />
      </div>
      <div class="container ">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <img src="./icon.svg" alt="" />
                <h5 class="f fs-2 py-3">Mobile App</h5>
                <p class="card-text text-light-emphasis fs-5">
                  Elevate user engagement with innovative mobile app solutions
                  tailored to your needs.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <img src="./Icon(1).svg" alt="" />
                <h5 class="f fs-2 py-3">UX/UI design</h5>
                <p class="card-text text-light-emphasis fs-5">
                  Design intuitive and visually stunning user interfaces for an
                  exceptional user experience.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <img src="./Icon(2).svg" alt="" />
                <h5 class="f fs-2 py-3">Interaction Design</h5>
                <p class="card-text text-light-emphasis fs-5">
                  Create meaningful interactions that enhance user engagement
                  and satisfaction.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <img src="./Icon(3).svg" alt="" />
                <h5 class="f fs-2 py-3">Digital&nbsp;Prototyping</h5>
                <p class="card-text text-light-emphasis fs-5">
                  Bring ideas to life through digital prototypes, ensuring a
                  tangible vision of your concept.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <img src="./Icon(4).svg" alt="" />
                <h5 class="f fs-2 py-3">Motion Graphics</h5>
                <p class="card-text text-light-emphasis fs-5">
                  Infuse dynamic visual elements to captivate users through
                  fluid and engaging motion graphics.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <img src="./arcticons_kvaesitso-icons-alt.svg" alt="" />
                <h5 class="f fs-2 py-3">Illustrations & Iconography</h5>
                <p class="card-text text-light-emphasis fs-5">
                  Craft unique visual identities with custom illustrations and
                  iconic design elements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-sm p-5">
        <img
          src="./Title.png"
          alt=""
          class="image-fluid w-100 w-sm-75 w-md-50 w-lg-25"
        />
      </div>
      <div class="container-sm p-5">
        <img
          src="./group-1939@2x.png"
          alt=""
          class="image-fluid w-100 w-sm-75 w-md-50 w-lg-25"
        />
      </div>
      <div class="container text-center ">
        <b class=" fs-2 f">Other Projects</b>

        <p class="card-text text-light-emphasis fs-5 p-3">
          Our portfolio boasts diverse UI/UX projects, showcasing our
          versatility in crafting captivating and <br />
          user-centric designs across varied industries and platforms.
        </p>
        <nav href="#" class="btn p-4">
          <img src="./Button.png" class="img-fluid" alt="." />
        </nav>
      </div>
      <div class="d-flex flex-column align-items-center container-bg-f justify-content-start text-center ">
        <div class="d-flex flex-row align-items-center  justify-content-center text-center ">
          <img src="./Scroll Buttonf.png" alt="" class="img-fluid m-4 p-5" />
        </div>
        <div class="d-flex flex-row">
          <div class="d-flex  align-items-center">
            <div class="flex-shrink-0">
              <img src="./image 1186.png" alt="" />
            </div>
            <div class="flex-grow-1 ms-1">
              <h3 class="fs-1 pe-5">Get In Touch</h3>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <img src="./image 307.png" alt="" />
            </div>
            <div class="flex-grow-1 ms-1">
              <h3 class="fs-1">Available For Work</h3>
            </div>
          </div>
        </div>
        <div class="card text-bg-light mb-3 m-5" style={{ border: "none", borderRadius: "15px" }}>
          <div class="card-body">
            <div class="d-flex align-items-center p-3">
            <div class="flex-grow-1 ms-1">
            <h3 class="fs-4 f pe-4">
                Interested in working together? Drop a Mail
              </h3>
            </div>
            <div class="flex-shrink-0">
            <img src="./Buttonf.png" alt="" />
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
