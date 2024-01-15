import React from "react";

function ArrowRight(props) {
  const fill = props.fill || "currentColor";
  const secondaryfill = props.secondaryfill || fill;
  const strokewidth = props.strokewidth || 1.5;
  const width = props.width || "100%";
  const height = props.height || "100%";

  return (
    <svg
      className="arrow-right"
      height={height}
      width={width}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={secondaryfill} stroke={secondaryfill} strokeWidth={strokewidth}>
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          x1="0.5"
          x2="15.5"
          y1="8"
          y2="8"
        />
        <polyline
          fill="none"
          points="10.5 3 15.5 8 10.5 13"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default ArrowRight;
