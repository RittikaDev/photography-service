import React, { useContext, useEffect } from "react";
import "./Haeder.css";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import CustomLink from "../../CustomLink/CustomLink";
import logo from "../../../Images/logo5.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../../App";

import { HashLink } from "react-router-hash-link";

const Header = (ref) => {
	const { cartItems } = useContext(Context);
	const [user] = useAuthState(auth);

	useEffect(() => {}, [ref]);
	const handleSignout = () => {
		signOut(auth);
	};

	return (
		<Navbar
			expand="lg"
			className="shadow fixed-top"
			id="header"
			bg="dark"
			variant="dark"
		>
			<Container
				fluid
				className="container"
				style={{ paddingTop: "0px", paddingBottom: "0px" }}
			>
				<Navbar.Brand to="" className="nav-brand text-light">
					<img src={logo} alt="" style={{ height: "50px" }} />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" className="text-light" />
				<Navbar.Collapse id="navbarScroll navbar">
					<Nav className="ms-auto my-1 my-lg-0" navbarScroll>
						<Form className="d-flex collapse">
							<CustomLink to="/banner" className="nav-link">
								Home
							</CustomLink>

							{/* Home Page subsection */}
							<HashLink
								className="nav-link"
								style={{ fontSize: "15px" }}
								to="/banner#gallery"
								smooth={true}
								duration={500}
								exact="true"
							>
								Gallery
							</HashLink>
							<HashLink
								className="nav-link"
								style={{ fontSize: "15px" }}
								to="/banner#top-work"
								smooth={true}
								duration={500}
								exact="true"
							>
								Top Work
							</HashLink>

							<HashLink
								className="nav-link"
								style={{ fontSize: "15px" }}
								to="/banner#review"
								smooth={true}
								duration={500}
								exact="true"
							>
								Customer Review
							</HashLink>
							{/* Home Page subsection */}
							<CustomLink className="nav-link" to="/blogs">
								Blogs
							</CustomLink>
							<CustomLink className="nav-link" to="/about">
								About
							</CustomLink>
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
							<CustomLink
								className="nav-link"
								to="/cart"
								style={{ margin: "6px 6px" }}
							>
								<FontAwesomeIcon
									icon={faCartShopping}
									style={{
										fontSize: "15px",
									}}
								/>
								<span
									style={{
										verticalAlign: "super",
										fontSize: "13px",
										marginLeft: "2px",
									}}
								>
									{cartItems}
								</span>
							</CustomLink>
						</Form>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
