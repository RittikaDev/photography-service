import React from "react";
import "./About.css";

const About = () => {
	return (
		<div className="my-3 about">
			<div className="container mb-5">
				<div className="row">
					<div className="col-lg-6 col-sm-12 mt-3">
						<div className="mt-5 pt-5">
							<h1 className="text-left mt-5">Hi There! </h1>
							<p>
								I am a keen individual with a deep seeded passion for web
								development. I enjoy the creativity and hard work that goes
								behind this process. And love it when I actually end up
								developing something on my own. Looking forward to learn more.
							</p>
						</div>
					</div>
					<div className="col-lg-6 col-sm-12">
						<section className="about_section">
							<div className="right"></div>
							<div className="left"></div>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
