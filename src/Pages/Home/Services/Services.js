import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCheck } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
	const [services, setServices] = useState([]);
	const [changeIconID, setChangeIconID] = useState([]);
	const [selectedArray, setSelectedArray] = useState([]);
	useEffect(() => {
		fetch("data.json")
			.then((res) => res.json())
			.then((data) => {
				setServices(data);
			});
	}, []);

	const addToCart = (id) => {
		const newIcons = [...changeIconID, id];
		setChangeIconID(newIcons);
		let selected = services.find((service) => service.id === id);
		selected.icon = "true";
		let selectedArr = [...selectedArray, selected];
		setSelectedArray(selectedArr);
		console.log(selectedArray);
	};
	return (
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
								<span
									onClick={() => {
										addToCart(service.id);
									}}
								>
									{changeIconID.includes(service.id) ? (
										<FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
									) : (
										<FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
									)}
								</span>
							</h3>
						</div>
					</div>
					<ul className="sci">
						<p className="text-center px-auto">{service.description}</p>
					</ul>
					<ul className="scis me-4 pe-2">
						<Link className="button btnb" to={"/services/" + service.id}>
							Checkout
						</Link>
					</ul>
				</div>
			))}
		</div>
	);
};

export default Services;
