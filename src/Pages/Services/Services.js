import React, { useEffect, useState } from "react";
import Works from "../Works/Works";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  console.log(services);
  return (
    <>
      <div className="container body">
        {services.map((service) => (
          <div className="card" key={service.id}>
            <div className="content">
              <div className="imgBx">
                <img src={service.image} alt={service.name} />
              </div>
              <div className="contentBx">
                <h3>
                  {service.name}
                  <br />
                  <span>{service.price}</span>
                </h3>
              </div>
            </div>
            <ul className="sci">
              <p className="text-center px-auto">{service.description}</p>
            </ul>
            <ul className="scis me-4 pe-2">
              <button className="btn btn-primary ">Checkout</button>
            </ul>
          </div>
        ))}
      </div>
      <Works></Works>
    </>
  );
};

export default Services;
