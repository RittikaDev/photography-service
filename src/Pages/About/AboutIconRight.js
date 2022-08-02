import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";

function AboutIconRight({ heading, text }) {
	return (
		<div className="row">
			<div className="col-lg-1 ps-3 mb-3">
				<FontAwesomeIcon
					className="about-me-icon rounded-circle p-2"
					icon={faCheckDouble}
				></FontAwesomeIcon>
			</div>
			<div className="col-lg-10 mb-4">
				<p
					className="text-start ps-4 fw-bold"
					style={{ marginTop: "-10px", marginBottom: "-10px" }}
				>
					{heading}
				</p>
				<p className="text-start fs-6 ps-4">{text}</p>
			</div>
		</div>
	);
}

export default AboutIconRight;
