import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";

function AboutIcon({ heading, text }) {
	return (
		<div className="row">
			<div className="col-lg-10 mb-3">
				<p
					className="text-end fw-bold"
					style={{ marginTop: "-3px", marginBottom: "-10px" }}
				>
					{heading}
				</p>
				<p className="text-end fs-6">{text}</p>
			</div>
			<div className="col-lg-1 mb-4">
				<FontAwesomeIcon
					className="about-me-icon rounded-circle p-2"
					icon={faCheckDouble}
				></FontAwesomeIcon>
			</div>
		</div>
	);
}

export default AboutIcon;
