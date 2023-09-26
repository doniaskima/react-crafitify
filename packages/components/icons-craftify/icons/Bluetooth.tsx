import React from 'react';

const Bluetooth = (props) => (
  <svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polyline
      points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"
      fill="none"
      stroke={props.color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Bluetooth;
