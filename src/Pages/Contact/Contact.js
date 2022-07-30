import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
	const sendEmail = (e) => {
		e.preventDefault();
		console.log(e.target);

		// emailjs
		// 	.sendForm(
		// 		"service_4zgcava",
		// 		"template_fpu5rnt",
		// 		e.target,
		// 		"bxY2HNrT9lXszTIDK"
		// 	)
		// 	.then((res) => {
		// 		console.log(res);
		// 	})
		// 	.catch((err) => console.log(err));
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
					{/* <ContactInfoItem icon={<MdLocalPhone />} text="+8801231" />
					<ContactInfoItem icon={<MdEmail />} text="webcifar@gmail.com" />
					<ContactInfoItem text="Chittagong, Bangladesh" /> */}
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
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
