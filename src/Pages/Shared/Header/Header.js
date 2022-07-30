import React from "react";
import "./Haeder.css";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import CustomLink from "../../CustomLink/CustomLink";

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
              <CustomLink to="/banner" className="nav-link">
                Home
              </CustomLink>
              <CustomLink className="nav-link" to="/blogs">
                Blogs
              </CustomLink>
              <CustomLink className="nav-link" to="/about">
                About
              </CustomLink>
              <a
                className="nav-link"
                style={{ fontSize: "16px" }}
                href="banner#gallery"
              >
                Gallery
              </a>

              <a
                className="nav-link"
                style={{ fontSize: "16px" }}
                href="banner#top-work"
              >
                Top Work
              </a>
              <CustomLink className="nav-link" to="/contact">
                Contact
              </CustomLink>
              {user ? (
                <CustomLink className="nav-link" to="" onClick={handleSignout}>
                  Signout
                </CustomLink>
              ) : (
                <CustomLink className="nav-link" to="/login">
                  Signup
                </CustomLink>
              )}
            </Form>
          </Nav>
          {/* <Form className="d-flex collapse">
            <CustomLink className="nav-link search-box" to="">
              <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </CustomLink>
            <CustomLink className="nav-link facebook" to="">
              <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
            </CustomLink>
            <CustomLink className="nav-link twitter" to="">
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </CustomLink>
            <CustomLink className="nav-link instagram" to="">
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </CustomLink>
            <CustomLink className="nav-link dribble" to="">
              <FontAwesomeIcon icon={faDribbble}></FontAwesomeIcon>
            </CustomLink>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
