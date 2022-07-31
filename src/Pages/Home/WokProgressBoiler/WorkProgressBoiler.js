import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function WorkProgressBoiler({ className, heading, text }) {
  const [ref, inView] = useInView();
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    if (inView) {
      setAnimation(true);
    }
  }, [inView]);
  return (
    <div className={`card ${className}`}>
      <div className="percent" ref={ref}>
        {animation && <div className="dot"></div>}
        <svg>
          <circle cx="70" cy="70" r="70" />
          {animation && <circle cx="70" cy="70" r="70" />}
        </svg>
        <div className="number">
          <h2>{heading}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkProgressBoiler;
