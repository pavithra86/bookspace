import React from "react";
import Img from "../../image";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <>
      {/* <header id="home" class="header"> */}
        {" "}
        {/* NAVIGATION */}
        <nav class="nav fix-nav">
          <div class="navigation container">
            <div class="logo">
              <h1> BOOKSPACE </h1>{" "}
            </div>
            <div class="menu">
              <div class="top-nav">
                <div class="logo">
                  <h1> BOOKSPACE </h1>{" "}
                </div>{" "}
                <div class="close">
                  <i class="bx bx-x"> </i>{" "}
                </div>{" "}
              </div>{" "}
              <div class="navs">
                <ul class="nav-list">
                  <li class="nav-item">
                    <Link to="/" class="nav-link scroll-link">
                      Home{" "}
                    </Link>{" "}
                  </li>{" "}
                  <li class="nav-item">
                    <Link to="/Fictional" class="nav-link">
                      Fictional{" "}
                    </Link>{" "}
                  </li>{" "}
                  <li class="nav-item">
                    <Link to="/Non-Fictional" class="nav-link">
                      Non Fictional{" "}
                    </Link>{" "}
                  </li>{" "}
                  <li class="nav-item">
                    <Link to="/Academics" class="nav-link">
                      Academics{" "}
                    </Link>{" "}
                  </li>{" "}
                  <li class="nav-item">
                    <Link to="/login" class="nav-link">
                      Login{" "}
                    </Link>{" "}
                  </li>
                  <li class="nav-item">
                    <Link to="/cart" class="nav-link">
                      Cart{" "}
                    </Link>{" "}
                  </li>{" "}
                  <li class="nav-item">
                    <Link to="/purchase" class="nav-link">
                        Orders
                    </Link>{" "}
                  </li>{" "}
                  <li class="nav-item">
                    <a href="cart.html" class="nav-link icon">
                      <i class="bx bxs-cart"> </i>{" "}
                    </a>{" "}
                  </li>{" "}
                </ul>{" "}
              </div>{" "}
            </div>
            <a href="cart.html" class="cart-icon">
              <i class="bx bxs-cart"> </i>{" "}
            </a>{" "}
            <div class="hamburger">
              <i class="bx bx-menu"> </i>{" "}
            </div>{" "}
          </div>{" "}
        </nav>
        {/* <!--hero--> */}
      {/* </header> */}
    </>
  );
}

export default Nav;
