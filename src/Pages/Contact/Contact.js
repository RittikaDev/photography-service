import React from "react";

const Contact = () => {
  return (
    <div className="wrapper my-3">
      <h3>Please Login</h3>
      <form className="container card-signup d-block form">
        <input
          name="name"
          type="text"
          className="feedback-input"
          placeholder="Name"
        />
        <input
          name="email"
          type="text"
          className="feedback-input"
          placeholder="Email"
        />
        <p
          className="text-danger"
          style={{ fontSize: "12px", fontWeight: "bolder" }}
        ></p>

        <input
          name="password"
          type="password"
          className="feedback-input"
          placeholder="Password"
        />

        <input type="submit" value="Register" className="button" />
      </form>
    </div>
  );
};

export default Contact;
