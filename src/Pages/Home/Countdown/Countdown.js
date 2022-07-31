import React from "react";
import Review from "../Review/Review";

const Countdown = () => {
	return (
		<div id="review" className="container">
			<div className="review-wrapper">
				<Review
					end={21}
					suffix=" +"
					text="Areas Covered All Over The Country"
				/>
				<Review end={20} suffix=" +" text="Loved By" />
				<Review end={15} suffix=" +" text="Events Done" />
			</div>
		</div>
	);
};

export default Countdown;
