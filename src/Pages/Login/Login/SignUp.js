import React, { useState } from "react";
import {
	useCreateUserWithEmailAndPassword,
	useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

function SignUp(props) {
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
	// const [signInWithGoogle, googleUser, loading2, googleError] =
	// 	useSignInWithGoogle(auth);
	const [signInWithGoogle] = useSignInWithGoogle(auth);
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
		<form className="sign-up-htm" onSubmit={handleRegister}>
			<div className="group">
				<label htmlFor="user" className="label mb-2">
					Username
				</label>
				<input id="user" type="text" className="input" />
			</div>
			<div className="group">
				<label htmlFor="pass" className="label mb-2">
					Password
				</label>
				<input
					onBlur={handlePasswordChange}
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
			<div className="group">
				<label htmlFor="pass" className="label mb-2">
					Confirm Password
				</label>
				<input
					onBlur={handleConfirmPasswordChange}
					id="pass"
					type="password"
					className="input"
					data-type="password"
				/>
			</div>
			<div className="group">
				<label htmlFor="pass" className="label mb-2">
					Email Address
				</label>
				<input
					onBlur={handleEmailChange}
					id="pass"
					type="text"
					className="input"
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
				<input type="submit" className="button" value="Sign Up" />
			</div>
			<div className="hr"></div>
			<div className="foot-lnk pb-3">
				<label onClick={() => signInWithGoogle()}>SignUp With Google</label>
			</div>
		</form>
	);
}

export default SignUp;
