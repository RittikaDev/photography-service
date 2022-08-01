import React from "react";
import WorkProgressBoiler from "../WokProgressBoiler/WorkProgressBoiler";
import "./WorkProgress.css";

function WorkProgress() {
	return (
		<>
			<div className="container work-progress">
				<WorkProgressBoiler
					className="card1 card-down"
					heading="Wedding"
					text="79%"
				/>
				<WorkProgressBoiler className="card" heading="Nature" text="73%" />
				<WorkProgressBoiler
					className="card2 card-down"
					heading="Outdoor"
					text="67%"
				/>
			</div>
			<div className="container work-progress ">
				<WorkProgressBoiler className="card3" heading="Events" text="75%" />
			</div>
		</>
	);
}

export default WorkProgress;
