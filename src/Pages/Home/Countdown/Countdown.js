import React from "react";
import Review from "../Review/Review";
import Testimonials from "../Testimonials/Testimonials";

const Countdown = () => {
  return (
    <>
      <div id="review" className="container">
        <div className="review-wrapper">
          <Review
            end={21}
            suffix=" +"
            text="Areas Covered All Over The Country"
          />
          <Review end={2350} suffix=" +" text="Loved By" />
          <Review end={150} suffix=" +" text="Events Done" />
        </div>
      </div>
      <Testimonials />
    </>
  );
};

export default Countdown;
