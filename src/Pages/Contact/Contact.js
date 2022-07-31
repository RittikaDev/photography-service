import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const Contact = () => {
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_4zgcava",
				"template_fpu5rnt",
				e.target,
				"bxY2HNrT9lXszTIDK"
			)
			.then((res) => {
				toast.success("Message Has Been Sent");
			})
			.catch((err) => console.log(err));
	};
	return (
		<div className="container contactSection">
			<div className="contactSection__wrapper">
				<div className="left my-5">
					<div className="itemstyle">
						<div className="icon">icon</div>
						<div className="info">
							<p>text</p>
						</div>
					</div>
					<div className="itemstyle">
						<div className="icon">icon</div>
						<div className="info">
							<p>text</p>
						</div>
					</div>
					<div className="itemstyle">
						<div className="icon">icon</div>
						<div className="info">
							<p>text</p>
						</div>
					</div>
				</div>
				<div className="right">
					<form onSubmit={sendEmail} className="wrapper-contact my-3">
						<div className="form-group">
							<label htmlFor="name">
								Your Name
								<input type="text" id="name" name="name" />
							</label>
						</div>
						<div className="form-group">
							<label htmlFor="email">
								Your Email
								<input type="email" id="email" name="email" />
							</label>
						</div>
						<div className="form-group">
							<label htmlFor="message">
								Your message
								<textarea type="text" id="message" name="message" />
							</label>
						</div>
						<button type="submit">Send</button>
						<button className="buttonn">Click Me</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
