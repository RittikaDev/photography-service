import React, { useContext } from "react";
import "./Cart.css";
import Table from "react-bootstrap/Table";
import { Context } from "../../App";

function Cart() {
	const { selectedProductList } = useContext(Context);
	console.log(selectedProductList);
	return (
		<Table striped bordered hover className="table-cart container">
			<thead>
				<tr>
					<th>#</th>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Username</th>
				</tr>
			</thead>
			<tbody>
				{selectedProductList.map((item, index) => {
					return (
						<tr key={index}>
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
						Total
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
