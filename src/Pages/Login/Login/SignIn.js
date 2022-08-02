import React, { useEffect, useRef, useState } from "react";
import {
	useSendPasswordResetEmail,
	useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";
import "./Login.css";

function SignIn(props) {
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
	const [sendPasswordResetEmail, sending, error] =
		useSendPasswordResetEmail(auth);

	const handleEmailChange = (e) => {
		const emailRegex = /\S+@\S+\.\S+/;
		const validEmail = emailRegex.test(e.target.value);
		if (validEmail) {
			setUserInfo({ ...userInfo, email: e.target.value });
			setErrors({ ...errors, email: "" });
		} else {
			setErrors({ ...errors, email: "Wrong email entered!" });
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
			setErrors({ ...errors, password: "Typed a wrong password! Try again." });
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
		const error = hookError;
		if (error) {
			switch (error?.code) {
				case "auth/invalid-email":
					toast("Wrong email typed !");
					break;
				case "auth/invalid-password":
					toast("Wrong password, try again please!");
					break;
				default:
					toast("Something went wrong");
			}
		}
	}, [hookError]);

	const resetPassword = async () => {
		const email = emailRef.current.value; //basically gives whatever was written in the email input
		console.log(email);
		await sendPasswordResetEmail(email);
		toast("Sent email");
	};
	return (
		<form className="sign-in-htm" onSubmit={handleLogin}>
			<div className="group">
				<label htmlFor="user" className="label mb-2">
					Username
				</label>
				<input id="user" type="text" className="input" />
			</div>
			<div className="group">
				<label htmlFor="email" className="label mb-2">
					Email
				</label>
				<input
					ref={emailRef}
					id="email"
					type="email"
					className="input"
					data-type="email"
					onChange={handleEmailChange}
				/>
				{errors?.email && (
					<p
						className="text-danger"
						style={{ fontSize: "12px", fontWeight: "bolder" }}
					>
						{errors.email}
					</p>
				)}
			</div>
			<div className="group">
				<label htmlFor="pass" className="label mb-2">
					Password
				</label>

				<input
					onChange={handlePasswordChange}
					id="pass"
					type="password"
					className="input"
					data-type="password"
				/>
				{errors?.password && (
					<p
						className="text-danger"
						style={{ fontSize: "12px", fontWeight: "bolder" }}
					>
						{errors.password}
					</p>
				)}
			</div>

			<div className="group pt-3">
				<input type="submit" className="button" value="Sign In" />
			</div>
			<div className="hr"></div>

			<div className="foot-lnk pb-3">
				<label onClick={resetPassword}>Forgot Password?</label>
			</div>
		</form>
	);
}

export default SignIn;
