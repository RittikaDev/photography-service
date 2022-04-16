import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-bootstrap";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="container mx-5">
          <div className="row ms-5 container">
            <div className="col-lg-4 footer-col">
              <h4>Tags</h4>
              <ul>
                <li>
                  <NavLink to="/recent">Nature</NavLink>
                </li>
                <li>
                  <NavLink to="/recent">Life</NavLink>
                </li>
                <li>
                  <NavLink to="/recent">Street</NavLink>
                </li>
              </ul>
            </div>
            <div className=" col-lg-4 footer-col">
              <h4>FAQ</h4>
              <ul>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Signup</NavLink>
                </li>
                <li>
                  <NavLink>About Me</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 footer-col">
              <h4>Follow Me</h4>
              <div className="social-links">
                <NavLink>
                  <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                </NavLink>
                <NavLink>
                  <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </NavLink>
                <NavLink>
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </NavLink>
                <NavLink>
                  <FontAwesomeIcon icon={faDribbble}></FontAwesomeIcon>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
