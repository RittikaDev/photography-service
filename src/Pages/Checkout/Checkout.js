import React from "react";
import "./Checkout.css";
import checkout from "../../Images/checkout.jpg";

const Checkout = () => {
  return (
    <div class="mainscreen my-5">
      <div class="card">
        <div class="leftside">
          <img src={checkout} class="product" alt="Shoes" />
        </div>
        <div class="rightside">
          <form action="">
            <h1 className="text-center">CheckOut</h1>
            <h2 className="text-center">Payment Information</h2>
            <input
              type="text"
              class="inputbox"
              name="name"
              placeholder="Username"
              required
            />
            <input
              type="text"
              class="inputbox"
              name="email"
              placeholder="Email Address"
              required
            />
            <input
              type="text"
              class="inputbox"
              name="address"
              placeholder="Address"
              required
            />
            <input
              type="number"
              class="inputbox"
              name="phone_number"
              id="phone_number"
              required
              placeholder="Phone Number"
            />

            <p>Card Type</p>
            <select class="inputbox" name="card_type" id="card_type" required>
              <option value="">--Select a Card Type--</option>
              <option value="Visa">Visa</option>
              <option value="RuPay">American Express</option>
              <option value="MasterCard">MasterCard</option>
            </select>
            <div class="expcvv">
              <p class="expcvv_text">Expiry</p>
              <input
                type="date"
                class="inputbox"
                name="exp_date"
                id="exp_date"
                required
              />
            </div>
            <button type="submit" class="button">
              CheckOut
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
