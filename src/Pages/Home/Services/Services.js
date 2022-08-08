import React, { useContext } from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCartPlus,
	faCheck,
	faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../../App";

const Services = () => {
	const { productlist, addToCart, changeIconID, colorIconID } =
		useContext(Context);

	return (
		<div className="container body">
			{productlist.map((service) => (
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
						<div className="text-center mx-auto ">
							<span
								onClick={() => {
									addToCart(service.id);
								}}
							>
								{changeIconID.includes(service.id) ? (
									<FontAwesomeIcon
										icon={faCheck}
										className="service-icon"
									></FontAwesomeIcon>
								) : (
									<FontAwesomeIcon
										icon={faCartPlus}
										className="service-icon"
									></FontAwesomeIcon>
								)}
							</span>
						</div>
						<div className="text-center mx-auto ms-1">
							<span
								onClick={() => {
									addToCart(service.id);
								}}
							>
								<FontAwesomeIcon
									className="service-icon"
									icon={faHeart}
									style={{
										color: colorIconID.includes(service.id) ? "red" : "",
									}}
								></FontAwesomeIcon>
							</span>
						</div>
					</ul>
					{/* <ul className="sci">
						<p className="text-center px-auto">{service.description}</p>
					</ul> */}
					{/* <ul className="scis me-4 pe-2">
						<Link className="button btnb" to={"/services/" + service.id}>
							Checkout
						</Link>
					</ul> */}
				</div>
			))}
		</div>
	);
};

export default Services;
