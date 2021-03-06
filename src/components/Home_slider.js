import React from 'react'

function Home_slider() {
  return (
    <>
    <section class=" slider_section ">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active">01</li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1">02</li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2">03</li>
              </ol>
              <div class="carousel-inner">
                  <div class="carousel-item active">
                      <div class="container">
                          <div class="row">
                              <div class="col-lg-5 col-md-6">
                                  <div class="slider_detail-box">
                                      <h1>
                                          Start <br />
                                          Business with <br />
                                          Our Company
                                      </h1>
                                      <p>
                                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                          nostrud exercitation ullamco laboris nisi
                                      </p>
                                      <div class="btn-box">
                                          <a href="" class="btn-1">
                                              Read More
                                          </a>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="slider_img-box">
                                      <img src="assets/images/slider-img.png" alt="" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="carousel-item">
                      <div class="container">
                          <div class="row">
                              <div class="col-lg-5 col-md-6">
                                  <div class="slider_detail-box">
                                      <h1>
                                          Start <br />
                                          Business with <br />
                                          Our Company
                                      </h1>
                                      <p>
                                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                          nostrud exercitation ullamco laboris nisi
                                      </p>
                                      <div class="btn-box">
                                          <a href="" class="btn-1">
                                              Read More
                                          </a>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="slider_img-box">
                                      <img src="assets/images/slider-img.png" alt="" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="carousel-item">
                      <div class="container">
                          <div class="row">
                              <div class="col-lg-5 col-md-6">
                                  <div class="slider_detail-box">
                                      <h1>
                                          Start <br />
                                          Business with <br />
                                          Our Company
                                      </h1>
                                      <p>
                                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                          nostrud exercitation ullamco laboris nisi
                                      </p>
                                      <div class="btn-box">
                                          <a href="" class="btn-1">
                                              Read More
                                          </a>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="slider_img-box">
                                      <img src="assets/images/slider-img.png" alt="" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="carousel_btn-container">
                  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                      <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                      <span class="sr-only">Next</span>
                  </a>
              </div>
          </div>
      </section>
    </>
  )
}

export default Home_slider