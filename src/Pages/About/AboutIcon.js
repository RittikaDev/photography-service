import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";

function AboutIcon(props) {
	return (
		<div className="row">
			<div className="col-lg-10 mb-4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
				voluptatum non, ex hic
			</div>
			<div className="col-lg-1 ">
				<FontAwesomeIcon
					className="about-me-icon rounded-circle p-2 "
					icon={faCheckDouble}
				></FontAwesomeIcon>
			</div>
		</div>
	);
}

export default AboutIcon;
