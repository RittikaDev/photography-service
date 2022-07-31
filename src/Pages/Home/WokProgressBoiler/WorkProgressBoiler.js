import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function WorkProgressBoiler({ className }) {
	const [ref, inView] = useInView();
	const [animation, setAnimation] = useState(false);
	useEffect(() => {
		if (inView) {
			setAnimation(true);
		}
	}, [inView]);
	return (
		<div className="card">
			<div className="percent" ref={ref}>
				{animation && <div className={`dot ${className}`}></div>}
				<svg>
					<circle cx="70" cy="70" r="70" />
					<circle cx="70" cy="70" r="70" />
				</svg>
			</div>
		</div>
	);
}

export default WorkProgressBoiler;
