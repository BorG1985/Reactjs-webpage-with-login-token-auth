import React from 'react';
import Navbar from './Navbar';

function Header() {
  return <>
    <header class="header_section">
          <div class="container-fluid">
              <div class="row">
                  <div class="col-lg-8">
                      <Navbar />
                  </div>
              </div>
          </div>
      </header>
  </>
}

export default Header