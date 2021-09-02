import React from "react";
import team_icon from "../../assets/how it works.png";
import agent_icon from "../../assets/agent.jpeg";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ScrollAnimation from "react-animate-on-scroll";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
function Contactus(props) {
  return (
    <ScrollAnimation
      delay={500}
      animateIn="animate__fadeInLeft"
      animateOnce={true}
    >
      <div class="row mx-auto px-md-3 px-xl-5 py-md-5 py-3">
        <div className="col-12 col-md-12 col-xl-9 mx-auto" id="Contact Us">
          <div className="row mx-auto">
            <h4 class="font-weight-bold w-100">Get Quote</h4>
            <p class="font-para text-center pt-0 col-md-6 mx-auto">
              As fellow entrepreneurs, we understand the need for space which
              gives your business room to breathe and grow.
            </p>
          </div>
          <div class="contact-form mt-0 col-md-11 mx-auto px-0">
            <div class="mt-5 col d-flex">
              <div class="col con-name">
                <label className="mb-0">Name</label>
                <input
                  type="text"
                  name="Name"
                  id="name"
                  className="w-100 zoom-in"
                />
              </div>
              <div class="col phone-no">
                <p className="mb-0">Phone</p>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  className="w-100 zoom-in"
                />
              </div>
            </div>
            <div class="mt-5 message col">
              <div class="col">
                <p className="mb-0">Message</p>
                <input
                  type="text"
                  name="message"
                  id="message"
                  className="w-100 zoom-in"
                />
              </div>
            </div>
            <div class="con-sub-btn col-10 ml-5 mt-5">
              <button class="btn-rdm-grd py-2 px-5 zoom-in">Submit</button>
            </div>
          </div>
        </div>{" "}
      </div>
    </ScrollAnimation>
  );
}

export default Contactus;
