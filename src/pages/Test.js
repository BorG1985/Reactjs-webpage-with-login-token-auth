import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Header/Footer';
import Home_slider from '../components/Home_slider';
import Home_services from '../components/Home_services';
import Home_welcome from '../components/Home_welcome';
import Home_section3 from '../components/Home_section3';

function test() {
  return <>
  <div class="hero_area">
      <Header />
      <Home_slider />
  </div>
        <Home_welcome />
        <Home_services />
        <Home_section3 />
      <section class="why_section layout_padding">
          <div class="container">
              <div class="custom_heading-container">
                  <h2>
                      Why Choose Us
                  </h2>
              </div>
              <div class="content-container">
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis
                  </p>
                  <div class="row">
                      <div class="col-md-3 col-sm-6">
                          <div class="img-box">
                              <img src="assets/images/smiley.png" alt="" />
                          </div>
                          <div class="detail-box">
                              <h3>
                                  99%
                              </h3>
                              <h6>
                                  SATISFIED CLIENTS
                              </h6>
                          </div>
                      </div>
                      <div class="col-md-3 col-sm-6">
                          <div class="img-box">
                              <img src="assets/images/monitor.png" alt="" />
                          </div>
                          <div class="detail-box">
                              <h3>
                                  4700+
                              </h3>
                              <h6>
                                  AWESOME planing
                              </h6>
                          </div>
                      </div>
                      <div class="col-md-3 col-sm-6">
                          <div class="img-box">
                              <img src="assets/images/multiple-users-silhouette.png" alt="" />
                          </div>
                          <div class="detail-box">
                              <h3>
                                  4500+
                              </h3>
                              <h6>
                                  CLIENTS
                              </h6>
                          </div>
                      </div>
                      <div class="col-md-3 col-sm-6">
                          <div class="img-box">
                              <img src="assets/images/bar-chart.png" alt="" />
                          </div>
                          <div class="detail-box">
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
      </section><section class="client_section layout_padding">
          <div class="container">
              <h2>
                  What Our Clients Says
              </h2>
              <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                      <div class="carousel-item active">
                          <div class="client_container layout_padding2">
                              <div class="client_text">
                                  <p>
                                      psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                      magna
                                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                      commodo
                                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                  </p>
                              </div>
                              <div class="detail-box">
                                  <div class="img-box">
                                      <img src="assets/images/client.png" alt="" />
                                  </div>
                                  <div class="name">
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
                      <div class="carousel-item">
                          <div class="client_container layout_padding2">
                              <div class="client_text">
                                  <p>
                                      psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                      magna
                                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                      commodo
                                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                  </p>
                              </div>
                              <div class="detail-box">
                                  <div class="img-box">
                                      <img src="assets/images/client.png" alt="" />
                                  </div>
                                  <div class="name">
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
                      <div class="carousel-item">
                          <div class="client_container layout_padding2">
                              <div class="client_text">
                                  <p>
                                      psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                      magna
                                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                      commodo
                                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                  </p>
                              </div>
                              <div class="detail-box">
                                  <div class="img-box">
                                      <img src="assets/images/client.png" alt="" />
                                  </div>
                                  <div class="name">
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
                  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span class="sr-only">Next</span>
                  </a>
              </div>

          </div>
      </section><section class="contact_section layout_padding">
          <div class="container contact_heading">
              <h2>
                  Contact Us
              </h2>
              <p>
                  psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </p>
          </div>
                
                
            </section>


            <Footer />


            </>


  
}

export default test