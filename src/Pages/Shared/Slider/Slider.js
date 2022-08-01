import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Slider() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("data.json")
			.then((res) => res.json())
			.then((data) => {
				setData(data);
			});
	}, []);
	return (
		<div className="slider">
			{data.map((data) => {
				const duration = data.id;
				return (
					<motion.div
						key={data.id}
						className="box"
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 2,
							delay: duration / 10,
							ease: [0, 0.71, 0.2, 1.01],
							repeat: Infinity,
						}}
					>
						<img src={data.image} alt="" />
					</motion.div>
				);
			})}
		</div>
	);
}

export default Slider;
