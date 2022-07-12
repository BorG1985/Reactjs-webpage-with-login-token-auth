import React from 'react'
import Footer from '../components/Header/Footer'
import Header from '../components/Header/Header'

function Service() {
  return (
    <>
    <div className="hero_area_about">
    <Header />
    </div>
    <div classNameName="white_space">
    </div>


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
              have suffered alteration in some form, by injected humour, or randomised words which don&#39;t look even
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
              have suffered alteration in some form, by injected humour, or randomised words which don&#39;t look even
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
              have suffered alteration in some form, by injected humour, or randomised words which don&#39;t look even
              slightly believable. If you are
            </p>
          </div>
        </div>
      </div>
      <div>
        <a href="">
          Read More
        </a>
      </div>
    </div>
  </section>
  <Footer />
    </>
  )
}

export default Service