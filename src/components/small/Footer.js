import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import logo from "../../assets/hash/hash-3.png";
function Footer(props) {
  return (
    <React.Fragment>
      <ScrollAnimation
        delay={500}
        animateIn="animate__fadeInUp"
        animateOnce={true}
      >
        <div class="row mx-auto footer mt-3">
          <div class="col-12 col-xl-8 mt-5 mx-auto">
            <div className="row mx-auto align-end">
              <div className="text-left col-xl-3 col-6">
                {" "}
                <img src={logo} alt="Logo_Image" class="w-50" />
              </div>
              <div className="col text-right">
                <p class="mb-0 small">FOLLOW US</p>
              </div>
            </div>
            <div className="row mx-auto">
              <div className="col-lg-8 col-8">
                <div className="row mx-auto align-items-center small text-left">
                  <a
                    href="#Home"
                    class="home-link-nav-ftr px-0 col-md col-4 px-0"
                  >
                    Home
                  </a>
                  <a
                    href="#About Us"
                    class="about-link-nav-ftr px-0 col-md col-4 px-0"
                  >
                    About Us
                  </a>
                  <a
                    href="#Services"
                    class="services-link-nav-ftr px-0 col-md col-4 px-0"
                  >
                    Services
                  </a>
                  <a
                    href="#Portfolio"
                    class="portfolio-link-nav-ftr px-0 col-md col-4 px-0"
                  >
                    Portfolio
                  </a>
                  <a
                    href="#Contact Us"
                    class="contact-link-nav-ftr px-0 col-md col-5 px-0 zoom-in"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-4 ftr-icon text-right">
                <a href="www.facebook.com" target="_blank">
                  <i class="col-1 fab fa-facebook-f mr-2"></i>
                </a>
                &nbsp;
                <a href="www.linkedin.com" target="_blank">
                  <i class=" fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div class="row mx-auto mt-md-4 mt-5 pt-md-0 pt-2">
              <div class="col-12 col-xl-12 text-left px-0">
                <hr class="ftr-hr mx-auto col-10 col-xl-11 my-md-2 my-1" />
                <div class="row mx-auto">
                  <div class="col-7 col-xl">
                    <p class="ftr-txt">
                      <Link to="">Terms & Conditions</Link>
                      &nbsp; | &nbsp;
                      <Link to="">Privacy Policy</Link>
                      &nbsp; | &nbsp;
                      <Link to="">Accessibility</Link>
                      &nbsp; | &nbsp;
                      <Link to="">Legal</Link>
                    </p>
                  </div>
                  <div class="col-5 col-xl ftr-rgstr text-right">
                    <p class="">©2021 HASH21. All Rights Reserved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </React.Fragment>
  );
}

export default Footer;
