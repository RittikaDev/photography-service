import React, { useState } from "react";
import "./Review.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Review = ({ text, icon, ...rest }) => {
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
							<FontAwesomeIcon className="link i" icon={icon}></FontAwesomeIcon>
							<span className="num" ref={countUpRef}></span>
							<span className="text">{text}</span>
						</div>
					</VisibilitySensor>
				);
			}}
		</CountUp>
	);
};

export default Review;
