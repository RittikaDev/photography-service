import React, { useState } from "react";
import "./Review.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Review({ text, ...rest }) {
	const [viewPortEntered, setViewPortEntered] = useState(false);

	return (
		<CountUp {...rest} start={viewPortEntered ? null : 0}>
			{({ countUpRef }) => {
				return (
					<VisibilitySensor
						active={!viewPortEntered}
						onChange={(isVisible) => {
							if (isVisible) {
								setViewPortEntered(true);
							}
						}}
						delayedCall
					>
						<div className="review-container">
							<i className="fas fa-utensils"></i>
							<span className="num" ref={countUpRef}></span>
							<span className="text">{text}</span>
						</div>
					</VisibilitySensor>
				);
			}}
		</CountUp>
	);
}

export default Review;
