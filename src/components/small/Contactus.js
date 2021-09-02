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
                <form className="" noValidate autoComplete="off">
                  <TextField
                    id="standard-basic"
                    className="w-100"
                    label="Name"
                  />
                </form>
              </div>
              <div class="col phone-no">
                <form className="" noValidate autoComplete="off">
                  <TextField
                    id="standard-basic"
                    className="w-100"
                    label="Phone"
                  />
                </form>
              </div>
            </div>
            <div class="mt-5 message col">
              <div class="col">
                <form className="" noValidate autoComplete="off">
                  <TextField
                    id="standard-basic"
                    className="w-100"
                    label="Message"
                  />
                </form>
              </div>
            </div>
            <div class="con-sub-btn col-10 ml-md-5 ml-2 mt-5">
              <button class="btn-rdm-grd py-2 px-5 zoom-in">Submit</button>
            </div>
          </div>
        </div>{" "}
      </div>
    </ScrollAnimation>
  );
}

export default Contactus;
