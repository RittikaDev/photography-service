import React from "react";
import "./Haeder.css";
import { Container, Form, Nav, Navbar, NavLink } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" className="shadow" id="header" bg="dark" variant="dark">
      <Container fluid className="container">
        <Navbar.Brand to="" className="nav-brand text-light">
          Frame it
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="text-light" />
        <Navbar.Collapse id="navbarScroll navbar">
          <Nav className="ms-auto my-1 my-lg-0" navbarScroll>
            <Form className="d-flex collapse">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/recent">
                Category
              </NavLink>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>

              <NavLink className="nav-link" to="/login">
                Signup
              </NavLink>
            </Form>
          </Nav>
          {/* <Form className="d-flex collapse">
            <NavLink className="nav-link search-box" to="">
              <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </NavLink>
            <NavLink className="nav-link facebook" to="">
              <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
            </NavLink>
            <NavLink className="nav-link twitter" to="">
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </NavLink>
            <NavLink className="nav-link instagram" to="">
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </NavLink>
            <NavLink className="nav-link dribble" to="">
              <FontAwesomeIcon icon={faDribbble}></FontAwesomeIcon>
            </NavLink>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
