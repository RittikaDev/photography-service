import React from "react";
import "./About.css";
import AboutIcon from "./AboutIcon";
import AboutIconRight from "./AboutIconRight";

const About = () => {
  return (
    <>
      <div className="section-full container my-5">
        <div className="row justify-content-center d-flex">
          <div className="col-lg-4">
            <AboutIcon
              heading="Years Of Experience"
              text="Been experimenting with camera for years, gathering not just skills
					but memories too!"
            />
            <AboutIcon
              heading="Best Image Quaility"
              text="Working with the latest technologies helps to provide the best quality!"
            />
            <AboutIcon
              heading="Visible Difference"
              text="Pick me to see an actual impact!"
            />
          </div>
          <div className="col-lg-4 pb-5 mb-5 ">
            <div className="middle">
              <div className="image image1">
                <img
                  src="https://images.unsplash.com/photo-1615048234103-2a149bb17ae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <AboutIconRight
              heading="Affordable Price"
              text="Providing excillent work keeping the budget in mind!"
            />
            <AboutIconRight
              heading="Editing Service"
              text="No need to rush to editors as I will be covering that too!"
            />
            <AboutIconRight
              heading="Pay As You Go"
              text="Pay only for what you need, no extra charge required!"
            />
          </div>
        </div>
      </div>
      <div className="row about-me-container my-5">
        <div className="col-lg-8 bg-image-about">
          <div className="row">
            <div className="col-lg-3 about-me-text">
              May Your Experience Be The Best You Ever Had
            </div>
            <div className="col-lg-9 about-me px-3 pt-3">
              Make me a part of your next memory, and I will make sure to frame
              it for you to cherish those moments forever!
            </div>
          </div>
          <div className="scrolling-image-container">
            <div className="scrolling-image"></div>
          </div>
        </div>

        <div
          className="col-lg-4"
          style={{ backgroundColor: "red", zIndex: 11 }}
        ></div>
      </div>
    </>
  );
};

export default About;
