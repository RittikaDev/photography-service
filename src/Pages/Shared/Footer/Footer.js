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
import Slider from "../Slider/Slider";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<Slider />
			<div className="footer">
				<div className="container">
					<div className="container text-center">
						<div className="row container">
							<div className="col-lg-4 footer-col">
								<h4>View More</h4>
								<ul>
									<li>
										<Link to="/recent">Nature</Link>
									</li>
									<li>
										<Link to="/recent">Life</Link>
									</li>
									<li>
										<Link to="/recent">Street</Link>
									</li>
								</ul>
							</div>
							<div className=" col-lg-4 footer-col">
								<h4>Quick Access</h4>
								<ul>
									<li>
										<Link to="/login">Login</Link>
									</li>
									<li>
										<Link to="/about">About </Link>
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
		</>
	);
};

export default Footer;
