import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "./Login.css";

function Wrapper() {
	return (
		<div className="login-wrap my-5">
			<div className="login-html">
				<input
					id="tab-1"
					type="radio"
					name="tab"
					className="sign-in"
					checked
					readOnly
				/>
				<label htmlFor="tab-1" className="tab">
					Sign In
				</label>
				<input id="tab-2" type="radio" name="tab" className="sign-up" />
				<label htmlFor="tab-2" className="tab">
					Sign Up
				</label>
				<div className="login-form">
					<SignIn />
					<SignUp />
				</div>
			</div>
		</div>
	);
}

export default Wrapper;
