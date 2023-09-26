import React from 'react';

const Chrome = (props) => (
  <svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" fill="none" stroke={props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="4" fill="none" stroke={props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="21.17" y1="8" x2="12" y2="8" fill="none" stroke={props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="3.95" y1="6.06" x2="8.54" y2="14" fill="none" stroke={props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="10.88" y1="21.94" x2="15.46" y2="14" fill="none" stroke={props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default Chrome;
