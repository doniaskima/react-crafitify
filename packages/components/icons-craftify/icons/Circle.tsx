import React from 'react';

const Circle = (props) => (
  <svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" fill="none" stroke={props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default Circle;
