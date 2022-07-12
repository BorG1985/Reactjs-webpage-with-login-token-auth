import React from 'react';

  
  function Navbar() {
    return (
        <>
        
        <nav class="navbar navbar-expand-lg custom_nav-container ">
            <a class="navbar-brand" href="/">
                <span >
                    BigWing
                </span>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="d-flex  flex-column flex-lg-row align-items-center">
                    <ul class="navbar-nav  ">
                        <li class="nav-item active">
                        <a class="nav-link" href="/">Home </a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/about">About </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/service">Services </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/login"> Login</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                        <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                    </form>
                </div>
            </div>
        </nav>
        
        </>
    )
  }
  
  export default Navbar;
    
