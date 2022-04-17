import React from "react";
import "./Works.css";
import wedding from "../../Images/Work/wedding.jpg";
import wildlife from "../../Images/Work/wildlife.jpg";
import birthday from "../../Images/Work/birthday.jpg";
import events from "../../Images/Work/events.jpg";
import nature from "../../Images/Work/nature.jpg";
import outdoor from "../../Images/Work/outdoor.jpg";

const Works = () => {
  return (
    <section id="portfolio" className="my-5">
      <div className="container">
        <div className="portfolio-content">
          <div className="title">
            <div className="d-flex align-items-center justify-content-center">
              <div style={{ height: "1.5px" }} className="bg-danger w-25"></div>
              <h3 className="mt-2 px-2">Some Of My Works!</h3>
              <div style={{ height: "1.5px" }} className="bg-danger w-25"></div>
            </div>
            <a href="#contact" className="btn-down">
              <i className="fas fa-chevron-down"></i>
            </a>
          </div>
          <div className="">
            <div className="portfolio-grid row row-cols-1 row-cols-md-3 px-4 mt-5 ms-5">
              <div
                className="card"
                style={{ width: "330px", height: "250px", margin: "0px" }}
              >
                <img
                  className="card-img-top"
                  src={wedding}
                  alt=""
                  style={{ width: "330px" }}
                />
              </div>
              <div
                className="card"
                style={{ width: "330px", height: "250px", margin: "0px" }}
              >
                <img
                  className="card-img-top"
                  src={wildlife}
                  alt=""
                  style={{ width: "330px" }}
                />
              </div>
              <div
                className="card"
                style={{ width: "330px", height: "250px", margin: "0px" }}
              >
                <img
                  className="card-img-top"
                  src={nature}
                  alt=""
                  style={{ width: "330px" }}
                />
              </div>
              <div
                className="card"
                style={{ width: "330px", height: "250px", margin: "0px" }}
              >
                <img
                  className="card-img-top"
                  src={outdoor}
                  alt=""
                  style={{ width: "330px" }}
                />
              </div>
              <div
                className="card"
                style={{ width: "330px", height: "250px", margin: "0px" }}
              >
                <img
                  className="card-img-top"
                  src={birthday}
                  alt=""
                  style={{ width: "330px" }}
                />
              </div>
              <div
                className="card"
                style={{ width: "330px", height: "250px", margin: "0px" }}
              >
                <img
                  className="card-img-top"
                  src={events}
                  alt=""
                  style={{ width: "330px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
