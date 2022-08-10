import React from "react";
// import CountDownAnimation from "./CountDownAnimation";
import Testimonials from "../Testimonials/Testimonials";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEarth, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import CountDownAnimation from "./CountDownAnimation";

const Countdown = () => {
	return (
		<>
			<div id="review">
				<div className="review-wrapper container ">
					<CountDownAnimation
						end={21}
						suffix=" +"
						text="Areas Covered All Over The Country"
						icon={faEarth}
					/>
					<CountDownAnimation
						end={2350}
						suffix=" +"
						text="Loved By"
						icon={faHeart}
					/>
					<CountDownAnimation
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
