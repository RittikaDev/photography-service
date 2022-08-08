import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

function TestimonialDetails({ testiMonialDetail }) {
	const { name, address, description } = testiMonialDetail;
	return (
		<div className="item">
			<div className="shadow-effect">
				<FontAwesomeIcon
					className="img-circle"
					icon={faUserGroup}
				></FontAwesomeIcon>
				<p>{description}</p>
			</div>
			<div className="testimonial-name">
				<h5>{name}</h5>
				<small>{address}</small>
			</div>
		</div>
	);
}

export default TestimonialDetails;
