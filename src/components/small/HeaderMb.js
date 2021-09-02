import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo_png from "../../assets/hash/hash-3.png";
function HeaderMb(props) {
  return (
    <div className="row mx-auto d-md-none d-block">
      <Navbar
        className="bg-trans col-12 mx-auto
      "
        bg=""
        expand="lg"
      >
        <div className="br-8 row mx-auto w-100 justify-content-between">
          <Navbar.Brand>
            <Link
              className="d-flex align-items-center zoom-in hover-shade br-20 py-2 px-3 text-dark"
              to="/"
            >
              <img src={logo_png} height="50px" width="" alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="bg-white br-8 shade p-2"
            id="basic-navbar-nav"
          >
            <Nav className="me-auto text-center">
              <Nav.Link
                href="#Home"
                className="text-dark font-weight-bold py-1"
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#About Us"
                className="text-dark font-weight-bold py-1"
              >
                About Us
              </Nav.Link>
              <Nav.Link
                href="#Services"
                className="text-dark font-weight-bold py-1"
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="#Portfolio"
                className="text-dark font-weight-bold py-1"
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                href="#Contact Us"
                className="text-dark font-weight-bold py-1"
              >
                Contact Us
              </Nav.Link>
              {/* <button
                class="p-0 border-0 text-dark text-left bg-trans font-weight-bold py-1"
                // onClick={() => dispatch(logout())}
              >
                Logout
              </button> */}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default HeaderMb;
