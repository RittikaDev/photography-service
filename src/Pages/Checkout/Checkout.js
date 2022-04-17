import React from "react";
import "./Checkout.css";
import checkout from "../../Images/checkout.jpg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const notify = () => toast("Thank you for your booking !");
  return (
    <div className="mainscreen my-5">
      <div className="card">
        <div className="leftside">
          <img src={checkout} className="product" alt="Shoes" />
        </div>
        <div className="rightside">
          <form action="">
            <h1 className="text-center">CheckOut</h1>
            <h2 className="text-center">Payment Information</h2>
            <input
              type="text"
              className="inputbox"
              name="name"
              placeholder="Username"
              required
            />
            <input
              type="text"
              className="inputbox"
              name="email"
              placeholder="Email Address"
              required
            />
            <input
              type="text"
              className="inputbox"
              name="address"
              placeholder="Address"
              required
            />
            <input
              type="number"
              className="inputbox"
              name="phone_number"
              id="phone_number"
              required
              placeholder="Phone Number"
            />

            <p>Card Type</p>
            <select
              className="inputbox"
              name="card_type"
              id="card_type"
              required
            >
              <option value="">--Select a Card Type--</option>
              <option value="Visa">Visa</option>
              <option value="RuPay">American Express</option>
              <option value="MasterCard">MasterCard</option>
            </select>
            <div className="expcvv">
              <p className="expcvv_text">Expiry</p>
              <input
                type="date"
                className="inputbox"
                name="exp_date"
                id="exp_date"
                required
              />
            </div>
            <button type="submit" className="button" onClick={notify}>
              CheckOut
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
