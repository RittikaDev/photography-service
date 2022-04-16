import React from "react";
import { NavLink } from "react-bootstrap";
import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";

const Banner = () => {
  return (
    <header className="header">
      <div className="container about mt-0">
        <div className="about-content">
          <div className="about-img flex mb-2">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="photographer img"
              className="rounded rounded-circle mt-2"
            />
          </div>
          <h2 className="mb-4">Frame Your Moments</h2>
          <h3 className="pb-2 text-center mb-3x mx-auto">
            {" "}
            <span style={{ color: "rgb(1, 87, 144, 1)" }}>
              |
            </span> Photographer{" "}
            <span style={{ color: "rgb(1, 87, 144, 1)" }}>|</span>{" "}
          </h3>
          <blockquote className="my-2 mx-auto text-center">
            "Photography is a way of feeling, of touching, of loving. What you
            have caught on film is captured forever ... It remembers little
            things, long after you have forgotten everything."
            <span>-Aaron Siskind</span>
          </blockquote>
        </div>

        <div className="social-icons mx-auto mt-3 pe-3">
          <ul>
            <NavLink className="link">
              <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
            </NavLink>

            <NavLink className="link">
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </NavLink>

            <NavLink className="link">
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </NavLink>

            <NavLink className="link">
              <FontAwesomeIcon icon={faDribbble}></FontAwesomeIcon>
            </NavLink>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Banner;
