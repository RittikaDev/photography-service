import React, { useEffect, useState } from "react";
import "./Gallery.css";
import { motion } from "framer-motion";
import Slider from "../../Shared/Slider/Slider";

const Gallery = () => {
	const [gallery, setGallery] = useState([]);
	const [filter, setFilter] = useState([]);
	const [notFiltered, setNotFiltered] = useState(true);

	useEffect(() => {
		fetch("gallery.json")
			.then((res) => res.json())
			.then((data) => {
				setGallery(data);
			});
	}, []);
	const filterCategory = (category) => {
		if (category === "all") {
			setFilter(gallery);
		} else if (category === "Wedding") {
			setNotFiltered(false);
			setFilter(gallery.filter((item) => item.category === category));
		} else if (category === "OutDoor") {
			setNotFiltered(false);
			setFilter(gallery.filter((item) => item.category === category));
		}
	};
	return (
		<>
			<div className="container my-5" id="gallery">
				<div className="filter mb-5 text-center">
					<button
						onClick={() => {
							filterCategory("all");
						}}
					>
						All
					</button>
					<button
						onClick={() => {
							filterCategory("Wedding");
						}}
					>
						Wedding
					</button>
					<button
						onClick={() => {
							filterCategory("OutDoor");
						}}
					>
						Outdoor
					</button>
				</div>
				<div className="gallery mx-5">
					{notFiltered
						? gallery.map((image) => (
								<motion.div layout key={image.id}>
									<motion.div
										animate={{ opacity: 1 }}
										initial={{ opacity: 0 }}
										exit={{ opacity: 0 }}
									>
										<img src={image.image} alt={image.name} />
									</motion.div>
								</motion.div>
						  ))
						: filter.map((image) => (
								<motion.div layout key={image.id}>
									<motion.div
										animate={{ opacity: 1 }}
										initial={{ opacity: 0 }}
										exit={{ opacity: 0 }}
									>
										<img src={image.image} alt={image.name} />
									</motion.div>
								</motion.div>
						  ))}
				</div>
			</div>
			<Slider />
		</>
	);
};

export default Gallery;
