import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Header/Footer";

export default function About() {
  return (
    <>
      <div class="hero_area_about">
        <Header />
        </div>
      <section class="welcome_section layout_padding">
        <div class="container">
          <div class="custom_heading-container">
            <h2>Welcome To Our Company</h2>
          </div>
          <div class="layout_padding2">
            <div class="img-box">
              <img src="assets/images/welcome.png" alt="" />
            </div>
            <div class="detail-box">
              <p>
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu
              </p>
              <div>
                <a href="contact.html">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
