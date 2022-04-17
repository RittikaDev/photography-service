import React, { useEffect, useRef, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Button } from "react-bootstrap";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });
  const emailRef = useRef("");

  const [signInWithEmail, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, loading2, googleError] =
    useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

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

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(userInfo);
    signInWithEmail(userInfo.email, userInfo.password);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [from, navigate, user]);

  useEffect(() => {
    const error = hookError || googleError;
    if (error) {
      switch (error?.code) {
        case "auth/invalid-email":
          alert("Invalid email provided, please provide a valid email");
          break;

        case "auth/invalid-password":
          alert("Wrong password. Intruder!!");
          break;
        default:
          alert("something went wrong");
      }
    }
  }, [hookError, googleError]);

  const resetPassword = async () => {
    const email = emailRef.current.value; //basically gives whatever was written in the email input
    console.log(email);
    await sendPasswordResetEmail(email);
    toast("Sent email");
  };
  return (
    <div className="wrapper">
      <h3>Please Login</h3>
      <form
        onSubmit={handleLogin}
        className="container card-signup d-block form"
      >
        <input
          name="name"
          type="text"
          className="feedback-input"
          placeholder="Name"
        />
        {userInfo?.name && <p>{userInfo.name}</p>}
        <input
          name="email"
          ref={emailRef}
          type="text"
          className="feedback-input"
          placeholder="Email"
          onBlur={handleEmailChange}
        />
        {errors?.email && <p className="text-danger">{errors.email}</p>}
        <input
          name="password"
          type="password"
          className="feedback-input"
          placeholder="Password"
          onBlur={handlePasswordChange}
        />
        {errors?.password && <p className="text-danger">{errors.password}</p>}

        <input type="submit" value="Register" className="btn" />
        <div className="d-flex align-items-center justify-content-center">
          <div style={{ height: "1.5px" }} className="bg-danger w-25"></div>
          <h3 className="mt-2 px-2">or</h3>
          <div style={{ height: "1.5px" }} className="bg-danger w-25"></div>
        </div>
        <div className="text-center logo">
          <FontAwesomeIcon icon={faGoogle} className="icon"></FontAwesomeIcon>
        </div>
        <p>
          Already have an account?
          <Link to="/login">Login</Link>
        </p>
        <p>
          Fogot Password?{" "}
          <Button
            className="text-primary pe-auto text-decoration-none"
            onClick={resetPassword}
          >
            Reset Password
          </Button>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
