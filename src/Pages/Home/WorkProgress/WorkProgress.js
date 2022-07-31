import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import WorkProgressBoiler from "../WokProgressBoiler/WorkProgressBoiler";
import "./WorkProgress.css";

function WorkProgress() {
	const [ref, inView] = useInView();
	const [animation, setAnimation] = useState(false);
	useEffect(() => {
		if (inView) {
			setAnimation(true);
		}
	}, [inView]);
	return (
		<div className="container work-progress">
			<div className="card">
				<div className="percent" ref={ref}>
					{animation && <div className="dot"></div>}
					<svg>
						<circle cx="70" cy="70" r="70" />
						<circle cx="70" cy="70" r="70" />
					</svg>
				</div>
			</div>
			<div className="card">
				<div className="percent">
					{animation && <div className="dot"></div>}
					<svg>
						<circle cx="70" cy="70" r="70" />
						<circle cx="70" cy="70" r="70" />
					</svg>
				</div>
			</div>
			<WorkProgressBoiler className="dot1" />
		</div>
	);
}

export default WorkProgress;
