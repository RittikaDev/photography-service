import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

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
						<div className="icon">
							<FontAwesomeIcon icon={faEnvelope} />
						</div>
						<div className="info">
							<p>jamie@gmail.com</p>
						</div>
					</div>
					<div className="itemstyle">
						<div className="icon">
							<FontAwesomeIcon icon={faPhoneVolume} />
						</div>
						<div className="info">
							<p>09345271835</p>
						</div>
					</div>
					<div className="itemstyle">
						<div className="icon">
							<FontAwesomeIcon icon={faInstagram} />
						</div>
						<div className="info">
							<p>Jamie.Keery</p>
						</div>
					</div>
				</div>
				<div className="right">
					<form onSubmit={sendEmail} className="wrapper-contact my-3">
						<div className="form-group">
							<label htmlhtmlFor="name">
								Your Name
								<input type="text" id="name" name="name" />
							</label>
						</div>
						<div className="form-group">
							<label htmlhtmlFor="email">
								Your Email
								<input type="email" id="email" name="email" />
							</label>
						</div>
						<div className="form-group">
							<label htmlhtmlFor="message">
								Your message
								<textarea type="text" id="message" name="message" />
							</label>
						</div>
						{/* <button type="submit">Send</button> */}
						<button className="buttonn mb-5" type="submit">
							Send
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
