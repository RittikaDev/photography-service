import React from "react";
import "./Testimonials.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import TestimonialDetails from "../TestimonialDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

function Testimonials(props) {
	const testiMonials = [
		{
			name: "Brandon Savage",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
			address: "USA",
			img: "https://i.ibb.co/z7Kp6yr/np-file-33188.jpg",
		},
		{
			name: "Steve Burns",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
			address: "USA",
			img: "https://i.ibb.co/CP5sj7g/2856040-58866808-2560-1440.jpg",
		},
		{
			name: "Kevin Canlas",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
			address: "USA",
			img: "https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg",
		},
	];
	//Owl Carousel Settings
	const options = {
		loop: true,
		center: true,
		items: 3,
		margin: 0,
		autoplay: true,
		dots: true,
		autoplayTimeout: 8500,
		smartSpeed: 400,
		nav: false,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 3,
			},
			1000: {
				items: 3,
			},
		},
	};
	return (
		<section id="testimonial" className="testimonials pt-70 pb-70 my-5">
			<div className="container mt-5">
				<h4 className="miniTitle text-center">TESTIMONIALS</h4>

				<div className="row">
					<div className="col-md-12">
						<OwlCarousel
							id="customer-testimonoals"
							className="owl-carousel owl-theme"
							{...options}
						>
							{testiMonials.length === 0 ? (
								<div className="item">
									<div className="shadow-effect">
										<FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore
											magna.
										</p>
									</div>
									<div className="testimonial-name">
										<h5>Rajon Rony</h5>
										<small>ITALY</small>
									</div>
								</div>
							) : (
								testiMonials.map((testiMonialDetail) => {
									return (
										<TestimonialDetails
											testiMonialDetail={testiMonialDetail}
											key={testiMonialDetail._key}
										/>
									);
								})
							)}
						</OwlCarousel>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Testimonials;
