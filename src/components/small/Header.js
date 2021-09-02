import React, { useState } from "react";
import logo_png from "../../assets/hash/hash-3.png";
import { Link, NavLink } from "react-router-dom";

function Header(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }
  return (
    <React.Fragment>
      <div className="header-bg"></div>
      <div className="d-md-block d-none">
        <div className="row mx-auto col-10 col-md-10 col-xl-6" id="Home">
          <img
            src={logo_png}
            alt="Logo"
            id="h-img-logo"
            className="mt-2 col-4"
          />
          <div className="col mt-4 nav-header px-1">
            <nav id="nav-header">
              <a
                href="#Home"
                className="home-link-nav-bar px-1 py-1 navlink active"
              >
                Home
              </a>
              <a
                href="#About Us"
                className="about-link-nav-bar px-1 py-1 navlink"
              >
                About Us
              </a>
              <a
                href="#Services"
                className="services-link-nav-bar px-1 py-1 navlink"
              >
                Services
              </a>
              <a
                href="#Portfolio"
                className="portfolio-link-nav-bar px-1 py-1 navlink"
              >
                Portfolio
              </a>
              <a
                href="#Contact Us"
                className="contact-link-nav-bar px-1 py-1 navlink"
              >
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
