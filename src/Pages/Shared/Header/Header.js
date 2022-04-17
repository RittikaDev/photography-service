import React from "react";
import "./Haeder.css";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignout = () => {
    signOut(auth);
  };
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
              <Link to="/banner" className="nav-link">
                Home
              </Link>
              <Link className="nav-link" to="/recent">
                Category
              </Link>
              <Link className="nav-link" to="/about">
                About
              </Link>

              {user ? (
                <Link className="nav-link" to="" onClick={handleSignout}>
                  Signout
                </Link>
              ) : (
                <Link className="nav-link" to="/login">
                  Signup
                </Link>
              )}
            </Form>
          </Nav>
          {/* <Form className="d-flex collapse">
            <Link className="nav-link search-box" to="">
              <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </Link>
            <Link className="nav-link facebook" to="">
              <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
            </Link>
            <Link className="nav-link twitter" to="">
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </Link>
            <Link className="nav-link instagram" to="">
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </Link>
            <Link className="nav-link dribble" to="">
              <FontAwesomeIcon icon={faDribbble}></FontAwesomeIcon>
            </Link>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
