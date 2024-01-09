import React, { useEffect, useRef } from "react";

const Progress = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    loadBar();
  }, []);

  const loadBar = () => {
    setInterval(() => {
      if (progressRef.current.style.getPropertyValue("--width") >= 100) {
        return progressRef.current.style.setProperty("--width", 0);
      }
      const computedStyle = getComputedStyle(progressRef.current);
      const width = parseFloat(computedStyle.getPropertyValue("--width")) || 0;
      progressRef.current.style.setProperty("--width", width + 0.1);
    }, 25);
  };

  return <div className="progress-bar" ref={progressRef}></div>;
};

export default Progress;
