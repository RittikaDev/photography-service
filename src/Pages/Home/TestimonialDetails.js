import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

function TestimonialDetails({ testiMonialDetail }) {
  const { name, address, description } = testiMonialDetail;
  console.log("testiMonialDetail" + testiMonialDetail);
  return (
    <div class="item">
      <div class="shadow-effect">
        <FontAwesomeIcon
          className="img-circle"
          icon={faUserGroup}
        ></FontAwesomeIcon>
        <p>{description}</p>
      </div>
      <div class="testimonial-name">
        <h5>{name}</h5>
        <small>{address}</small>
      </div>
    </div>
  );
}

export default TestimonialDetails;
