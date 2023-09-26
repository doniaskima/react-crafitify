import React from 'react';

const CheckCircle = (props) => (
  <svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
      fill="none"
      stroke={props.color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <polyline
      points="22 4 12 14.01 9 11.01"
      fill="none"
      stroke={props.color}
      strokeWidth="2"
    />
  </svg>
);

export default CheckCircle;
