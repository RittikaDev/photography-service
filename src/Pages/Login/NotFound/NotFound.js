import React from "react";
import notfound from "../../../Images/notfound.jpg";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-lg-7 mt-5">
          <h1 style={{ color: "red" }}>404!!</h1>
          <h2>
            Seems like instead of capturing your moments, I captured you in a
            wrong route
          </h2>
        </div>
        <div className="col-lg-5">
          <img
            src={notfound}
            alt=""
            style={{ width: "100%", height: "350px", borderRadius: "10px" }}
            className="notfound"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
