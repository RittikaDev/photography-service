import React, { useContext, useEffect } from "react";
import "./Cart.css";
import Table from "react-bootstrap/Table";
import { Context } from "../../App";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function Cart() {
  const { selectedProductList, addedToBucket } = useContext(Context);
  const [showCart, setShowCart] = useState([]);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/cart/1") {
      setShowCart(selectedProductList);
    } else if (location.pathname === "/cart/2") {
      setShowCart(addedToBucket);
    }
  }, [addedToBucket, location.pathname, selectedProductList]);
  return (
    <Table striped bordered hover className="table-cart container my-5">
      <thead>
        <tr>
          <th>No.</th>
          <th>Event Image</th>
          <th>Event Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {showCart.map((item, index) => {
          return (
            <tr className="table-row" key={index}>
              <td>{index + 1}</td>
              <td>
                <img src={item.image} alt="items" />
              </td>
              <td>{item.name}</td>
              <td> $ {item.price}</td>
            </tr>
          );
        })}
        <tr>
          <td colSpan="3" className="fw-bold fs-5">
            Total Cost
          </td>
          <td className="fw-bold fs-5">
            $ {selectedProductList.reduce((a, b) => a + parseInt(b.price), 0)}
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Cart;
