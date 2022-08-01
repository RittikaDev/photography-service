import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import AboutIcon from "./AboutIcon";
import AboutIconRight from "./AboutIconRight";

const About = () => {
	return (
		// <div className="my-3 about">
		// 	<div className="container mb-5">
		// 		<div className="row">
		// 			<div className="col-lg-6 col-sm-12 mt-3">
		// 				<div className="mt-5 pt-5">
		// 					<h1 className="text-left mt-5">Hi There! </h1>
		// 					<p>
		// 						I am a keen individual with a deep seeded passion for web
		// 						development. I enjoy the creativity and hard work that goes
		// 						behind this process. And love it when I actually end up
		// 						developing something on my own. Looking forward to learn more.
		// 					</p>
		// 				</div>
		// 			</div>
		// 			<div className="col-lg-6 col-sm-12">
		// 				<section className="about_section">
		// 					<div className="right"></div>
		// 					<div className="left"></div>
		// 				</section>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
		<>
			<div className="section-full container my-5">
				<div className="row justify-content-center d-flex">
					<div className="col-lg-4">
						<AboutIcon />
						<AboutIcon />
						<AboutIcon />
					</div>
					<div className="col-lg-4 pb-5 mb-5 ">
						<div className="middle">
							<div className="image image1">
								<img
									src="https://images.unsplash.com/photo-1615048234103-2a149bb17ae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
									alt=""
								/>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<AboutIconRight />
						<AboutIconRight />
						<AboutIconRight />
					</div>
				</div>
			</div>
			<div className="row about-me-container my-5">
				<div className="col-lg-8 bg-image-about">
					<div className="row">
						<div className="col-lg-3 about-me-text">
							May Your Experience Be The Best You Ever Had
						</div>
						<div className="col-lg-9 about-me px-5 pt-4">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Adipisci, atque!
						</div>
					</div>
					<div className="scrolling-image-container">
						<div className="scrolling-image"></div>
					</div>
				</div>

				<div
					className="col-lg-4"
					style={{ backgroundColor: "red", zIndex: 11 }}
				></div>
			</div>
		</>
	);
};

export default About;
