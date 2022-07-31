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
      <WorkProgressBoiler className="card1" heading="Wedding" text="79%" />
      <WorkProgressBoiler className="card2" heading="Outdoor" text="67%" />
      <WorkProgressBoiler className="card3" heading="Events" text="75%" />
    </div>
  );
}

export default WorkProgress;
