import React from "react";
import Review from "../Review/Review";
import Testimonials from "../Testimonials/Testimonials";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEarth, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

const Countdown = () => {
	return (
		<>
			<div id="review">
				<div className="review-wrapper container ">
					<Review
						end={21}
						suffix=" +"
						text="Areas Covered All Over The Country"
						icon={faEarth}
					/>
					<Review end={2350} suffix=" +" text="Loved By" icon={faHeart} />
					<Review
						end={150}
						suffix=" +"
						text="Events Done"
						icon={faCalendarCheck}
					/>
				</div>
			</div>
			<Testimonials />
		</>
	);
};

export default Countdown;
