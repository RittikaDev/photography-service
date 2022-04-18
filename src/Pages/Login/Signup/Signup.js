import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, googleUser, loading2, googleError] =
    useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true }); //if user logs in, takes user to the wherever he could not access first
  }
  const handleEmailChange = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);

    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Invalid email" });
      setUserInfo({ ...userInfo, email: "" });
    }

    // setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(e.target.value);

    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Minimum 6 characters!" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const handleConfirmPasswordChange = (e) => {
    if (e.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPassword: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Password's don't match" });
      setUserInfo({ ...userInfo, confirmPassword: "" });
    }
  };

  const handleRegister = (e) => {
    const name = e.target.name.value;
    setUserInfo({ ...userInfo, name: name });
    e.preventDefault();
    // console.log(userInfo);
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
  };
  //   Google sign in

  console.log(userInfo);
  return (
    <div className="wrapper my-3">
      <h3 className="text-center">Please Sign Up</h3>
      <form
        onSubmit={handleRegister}
        className="container card-signup d-block form"
      >
        <input
          name="name"
          type="text"
          className="feedback-input"
          placeholder="Name"
        />
        {/* {userInfo?.name && <p>{userInfo.name}</p>} */}
        <input
          name="email"
          type="text"
          className="feedback-input"
          placeholder="Email"
          onBlur={handleEmailChange}
        />
        {errors?.email && (
          <p
            className="text-danger"
            style={{ fontSize: "12px", fontWeight: "bolder" }}
          >
            {errors.email}
          </p>
        )}
        <input
          name="password"
          type="password"
          className="feedback-input"
          placeholder="Password"
          onBlur={handlePasswordChange}
        />
        {errors?.password && (
          <p
            className="text-danger"
            style={{ fontSize: "12px", fontWeight: "bolder" }}
          >
            {errors.password}
          </p>
        )}
        <input
          name="confrimPassword"
          type="password"
          className="feedback-input"
          placeholder="Confirm Password"
          onBlur={handleConfirmPasswordChange}
        />

        <input type="submit" value="Register" className="button" />
        <div className="d-flex align-items-center justify-content-center">
          <div style={{ height: "1.5px" }} className="bg-danger w-25"></div>
          <h3 className="mt-2 px-2">or</h3>
          <div style={{ height: "1.5px" }} className="bg-danger w-25"></div>
        </div>
        <div className="text-center logo">
          <FontAwesomeIcon
            icon={faGoogle}
            className="icon"
            onClick={() => signInWithGoogle()}
          ></FontAwesomeIcon>
        </div>
        <p>
          Already have an account?
          <Link to="/login" className="btn">
            {" "}
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
