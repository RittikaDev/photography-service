import React from "react";
import "./Signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Signup = () => {
  return (
    <div class="container my-5">
      <div class="row justify-content-center mt-5">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card-signup py-3 px-2">
            <h5 class="text-center mb-3 mt-2">Please Sign Up !</h5>
            <form class="myform">
              <div class="form-group">
                {" "}
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                />{" "}
              </div>
              <div class="form-group">
                {" "}
                <input
                  type="password"
                  class="form-control"
                  placeholder="Mot de passe"
                />{" "}
              </div>

              <div className="d-flex align-items-center justify-content-center">
                <div
                  style={{ height: "1.5px" }}
                  className="bg-danger w-25"
                ></div>
                <p className="mt-2 px-2">Or Sign Up With</p>
                <div
                  style={{ height: "1.5px" }}
                  className="bg-danger w-25"
                ></div>
              </div>
              <div class="row mx-auto text-center d-flex">
                <FontAwesomeIcon
                  icon={faGoogle}
                  className="fab"
                ></FontAwesomeIcon>
              </div>
              <div class="form-group mt-3 text-center">
                {" "}
                <button type="button" class="btn btn-block btn-primary btn-lg">
                  <small>
                    <i class="far fa-user pr-2"></i>Sign Up
                  </small>
                </button>{" "}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
