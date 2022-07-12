import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
<>
      <div className="hero_area">
          <header className="header_section">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-8">
                  <nav className="navbar navbar-expand-lg custom_nav-container ">
                    <a className="navbar-brand" href="index.html">
                      <span>
                        BigWing
                      </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <div className="d-flex  flex-column flex-lg-row align-items-center">
                        <ul className="navbar-nav  ">
                          <li className="nav-item active">
                            <Link to="/">Home</Link>
                          </li>
                          <li className="nav-item">
                          <Link to="/">About</Link>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="service.html">Services </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="contact.html">Contact</a>
                          </li>
                          <li className="nav-item">
                          <Link to="/">About</Link>
                          </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                          <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                        </form>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </header>
          <section className=" slider_section ">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="/#carouselExampleIndicators" data-slide-to="0" className="active">01</li>
                <li data-target="/#carouselExampleIndicators" data-slide-to="1">02</li>
                <li data-target="/#carouselExampleIndicators" data-slide-to="2">03</li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-5 col-md-6">
                        <div className="slider_detail-box">
                          <h1>
                            Start <br/>
                            Business with <br/>
                            Our Company
                          </h1>
                          <p>
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi
                          </p>
                          <div className="btn-box">
                          <Link to="/">About</Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="slider_img-box">
                          <img src="assets/images/slider-img.png" alt=""/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-5 col-md-6">
                        <div className="slider_detail-box">
                          <h1>
                            Start <br/>
                            Business with <br/>
                            Our Company
                          </h1>
                          <p>
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi
                          </p>
                          <div className="btn-box">
                          <Link to="/">About</Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="slider_img-box">
                          <img src="assets/images/slider-img.png" alt=""/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-5 col-md-6">
                        <div className="slider_detail-box">
                          <h1>
                            Start <br/>
                            Business with <br/>
                            Our Company
                          </h1>
                          <p>
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi
                          </p>
                          <div className="btn-box">
                          <Link to="/">About</Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="slider_img-box">
                          <img src="assets/images/slider-img.png" alt=""/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel_btn-container">
                <a className="carousel-control-prev" href="/#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="/#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </section>
        </div>

        <section className="welcome_section layout_padding">
          <div className="container">
            <div className="custom_heading-container">
              <h2>
                Welcome To Our Company
              </h2>
            </div>
            <div className="layout_padding2">
              <div className="img-box">
                <img src="assets/images/welcome.png" alt=""/>
              </div>
              <div className="detail-box">
                <p>
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis
                  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                </p>
                <div>
                <Link to="/">About</Link>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="service_section">
          <div className="container">
            <div className="custom_heading-container">
              <h2>
                Our Services
              </h2>
            </div>
            <div className="service_container layout_padding2">
              <div className="service_box">
                <div className="img-box">
                  <img src="assets/images/s-1.jpg" alt=""/>
                </div>
                <div className="detail-box">
                  <h4>
                    Business <br/>
                    Consultant
                  </h4>
                  <p>
                    have suffered alteration in some form, by injected humour, or randomised words which don&/#39;t look even
                    slightly believable. If you are
                  </p>
                </div>
              </div>
              <div className="service_box">
                <div className="img-box">
                  <img src="assets/images/s-2.jpg" alt=""/>
                </div>
                <div className="detail-box">
                  <h4>
                    Marketing <br/>
                    Analytics
                  </h4>
                  <p>
                    have suffered alteration in some form, by injected humour, or randomised words which don&/#39;t look even
                    slightly believable. If you are
                  </p>
                </div>
              </div>
              <div className="service_box">
                <div className="img-box">
                  <img src="assets/images/s-3.jpg" alt=""/>
                </div>
                <div className="detail-box">
                  <h4>
                    Financial <br/>
                    Planning
                  </h4>
                  <p>
                    have suffered alteration in some form, by injected humour, or randomised words which don&/#39;t look even
                    slightly believable. If you are
                  </p>
                </div>
              </div>
            </div>
            <div>
            <Link to="/">About</Link>
            </div>
          </div>
        </section>

        <section className="problem_section layout_padding">
          <div className="container">
            <div className="custom_heading-container">
              <h2>
                Do you have any business problem ?
              </h2>
            </div>
            <div className="layout_padding2">
              <div className="img-box">
                <img src="assets/images/problem.jpg" alt=""/>
              </div>
              <div className="detail-box">
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                  some form, by injected humour, or randomised words which don&/#39;t look even slightly believable. I
                </p>
                <div>
                <Link to="/">About</Link>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="why_section layout_padding">
          <div className="container">
            <div className="custom_heading-container">
              <h2>
                Why Choose Us
              </h2>
            </div>
            <div className="content-container">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis
              </p>
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="img-box">
                    <img src="assets/images/smiley.png" alt=""/>
                  </div>
                  <div className="detail-box">
                    <h3>
                      99%
                    </h3>
                    <h6>
                      SATISFIED CLIENTS
                    </h6>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="img-box">
                    <img src="assets/images/monitor.png" alt=""/>
                  </div>
                  <div className="detail-box">
                    <h3>
                      4700+
                    </h3>
                    <h6>
                      AWESOME planing
                    </h6>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="img-box">
                    <img src="assets/images/multiple-users-silhouette.png" alt=""/>
                  </div>
                  <div className="detail-box">
                    <h3>
                      4500+
                    </h3>
                    <h6>
                      CLIENTS
                    </h6>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="img-box">
                    <img src="assets/images/bar-chart.png" alt=""/>
                  </div>
                  <div className="detail-box">
                    <h3>
                      19000+
                    </h3>
                    <h6>
                      DAILY business
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="client_section layout_padding">
          <div className="container">
            <h2>
              What Our Clients Says
            </h2>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="client_container layout_padding2">
                    <div className="client_text">
                      <p>
                        psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                      </p>
                    </div>
                    <div className="detail-box">
                      <div className="img-box">
                        <img src="assets/images/client.png" alt=""/>
                      </div>
                      <div className="name">
                        <h5>
                          Joans Mark
                        </h5>
                        <p>
                          cal
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="client_container layout_padding2">
                    <div className="client_text">
                      <p>
                        psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                      </p>
                    </div>
                    <div className="detail-box">
                      <div className="img-box">
                        <img src="assets/images/client.png" alt=""/>
                      </div>
                      <div className="name">
                        <h5>
                          Joans Mark
                        </h5>
                        <p>
                          cal
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="client_container layout_padding2">
                    <div className="client_text">
                      <p>
                        psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                      </p>
                    </div>
                    <div className="detail-box">
                      <div className="img-box">
                        <img src="assets/images/client.png" alt=""/>
                      </div>
                      <div className="name">
                        <h5>
                          Joans Mark
                        </h5>
                        <p>
                          cal
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="/#carouselExampleControls" role="button" data-slide="prev">
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="/#carouselExampleControls" role="button" data-slide="next">
                <span className="sr-only">Next</span>
              </a>
            </div>

          </div>
        </section>
        <section className="contact_section layout_padding">
          <div className="container contact_heading">
            <h2>
              Contact Us
            </h2>
            <p>
              psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
          </div>
          <div className="container">
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputName4">Name</label>
                  <input type="text" className="form-control" id="inputName4"/>
                </div>
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Email</label>
                  <input type="email" className="form-control" id="inputEmail4"/>
                </div>

              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputNumber4">Phone number</label>
                  <input type="tel" className="form-control" id="inputNumber4"/>
                </div>
                <div className="form-group col-md-6">
                  <label for="inputState">Select Service</label>
                  <select id="inputState" className="form-control">
                    <option selected=""></option>
                    <option>...</option>
                  </select>
                </div>

              </div>
              <div className="form-group">
                <label for="inputMessage">Message</label>
                <input type="text" className="form-control" id="inputMessage" placeholder=""/>
              </div>
          

          <div className="d-flex justify-content-center">
            <button type="submit" className="">Send</button>
          </div>
          </form>
        </div>
          
        </section>


        <div className="footer_bg">
          <section className="info_section layout_padding2-bottom">
            <div className="container">
              <h3 className="">
                BigWing
              </h3>
            </div>
            <div className="container info_content">

              <div>
                <div className="row">
                  <div className="col-md-6 col-lg-4">
                    <div className="d-flex">
                      <h5>
                        Useful Link
                      </h5>
                    </div>
                    <div className="d-flex ">
                      <ul>
                        <li>
                        <Link to="/">About</Link>
                        </li>
                        <li>
                        <Link to="/">About</Link>
                        </li>
                        <li>
                        <Link to="/">About</Link>
                        </li>
                        <li>
                        <Link to="/">About</Link>
                        </li>
                        <li>
                        <Link to="/">About</Link>
                        </li>
                      </ul>
                      <ul className="ml-3 ml-md-5">
                        <li>
                        <Link to="/">About</Link>
                        </li>
                        <li>
                        <Link to="/">About</Link>
                        </li>
                        <li>
                        <Link to="/">About</Link>
                        </li>
                        <li>
                        <Link to="/">About</Link>
                        </li>
                        <li>
                        <Link to="/">About</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="d-flex">
                      <h5>
                        The Services
                      </h5>
                    </div>
                    <div className="d-flex ">
                      <ul>
                        <li>
                        <Link to="/">About</Link>
                        </li>
                        <li>
                        <Link to="/">About</Link>
                        </li>
                        <li>
                        <Link to="/">About</Link>
                        </li>
                        <li>
                        <Link to="/">About</Link>
                        </li>
                        <li>
                        <Link to="/">About</Link>
                        </li>
                      </ul>
                      <ul className="ml-3 ml-md-5">
                        <li>
                        <Link to="/">About</Link>
                        </li>
                        <li>
                        <Link to="/">About</Link>
                        </li>
                        <li>
                        <Link to="/">About</Link>
                        </li>
                        <li>
                        <Link to="/">About</Link>
                        </li>
                        <li>
                        <Link to="/">About</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="d-flex">
                      <h5>
                        Contact Us
                      </h5>
                    </div>
                    <div className="d-flex ">
                      <ul>
                        <li>
                        <Link to="/">About</Link>
                        </li>
                        <li>
                        <Link to="/">About</Link>
                        </li>
                        <li>
                        <Link to="/">About</Link>
                        </li>
                        <li>
                        <Link to="/">About</Link>
                        </li>
                        <li>
                        <Link to="/">About</Link>
                        </li>
                      </ul>
                      <ul className="ml-3 ml-md-5">
                        <li>
                        <Link to="/">About</Link>
                        </li>
                        <li>
                        <Link to="/">About</Link>
                        </li>
                        <li>
                        <Link to="/">About</Link>
                        </li>
                        <li>
                        <Link to="/">About</Link>
                        </li>
                        <li>
                        <Link to="/">About</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-baseline">
                <div className="social-box">
                    <img src="assets/images/fb.png" alt=""/>
                  
                    <img src="assets/images/twitter.png" alt=""/>
                  
                    <img src="assets/images/linkedin1.png" alt=""/>
                  
                    <img src="assets/images/instagram1.png" alt=""/>
                  
                </div>
                <div className="form_container mt-5">
                  <form action="">
                    <label for="subscribeMail">
                      Newsletter
                    </label>
                    <input type="email" placeholder="Enter Your email" id="subscribeMail"/>
                    <button type="submit">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>

          </section>
          <section className="container-fluid footer_section">
            <p>
              © 2019 All Rights Reserved By
              <a href="https://html.design/">Free Html Templates</a>
            </p>
          </section>
        </div>


        <script type="text/javascript" src="assets/js/jquery-3.4.1.min.js"></script>
        <script type="text/javascript" src="assets/js/bootstrap.js"></script>
        </>
  );
}
