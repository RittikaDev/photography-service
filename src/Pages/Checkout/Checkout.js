import React from "react";
import "./Checkout.css";
import checkout from "../../Images/checkout.jpg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    toast.success("Successfully Registered");
  };
  const notify = () => toast("Thank you for your booking !");
  return (
    <>
      <div className="mainscreen my-5">
        <div className="card">
          <div className="leftside">
            <img src={checkout} className="product" alt="" />
          </div>
          <div className="rightside">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-center">CheckOut</h1>
              <h2 className="text-center">Payment Information</h2>
              <input
                className="inputbox"
                placeholder="Username"
                {...register("name", { required: true })}
              />
              <input
                className="inputbox"
                placeholder="Email Address"
                {...register("email", { required: true })}
              />
              <input
                className="inputbox"
                placeholder="Address"
                required
                {...register("address", { required: true })}
              />
              <input
                className="inputbox"
                id="phone_number"
                required
                placeholder="Phone Number"
                {...register("phone_number", { required: true })}
              />

              <p>Card Type</p>
              <select
                className="inputbox"
                id="card_type"
                required
                {...register("card_type", { required: true })}
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
      <div className="my-3"></div>
    </>
  );
};

export default Checkout;
