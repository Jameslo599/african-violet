import React from "react";

function CheckboxBtn(props) {
  const fill = props.fill || "currentColor";
  const secondaryfill = props.secondaryfill || fill;
  const strokewidth = props.strokewidth || 0.75;
  const width = props.width || "100%";
  const height = props.height || "100%";

  return (
    <svg
      className="checkbox"
      height={height}
      width={width}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={secondaryfill}>
        <path
          d="M20,23H4a3,3,0,0,1-3-3V4A3,3,0,0,1,4,1H20a3,3,0,0,1,3,3V20A3,3,0,0,1,20,23ZM4,3A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V4a1,1,0,0,0-1-1Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CheckboxBtn;
