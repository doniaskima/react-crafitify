import React, { useState } from 'react';
import styled from 'styled-components';

const CheckboxWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 40px;

  &:hover .check {
    stroke-dashoffset: 0;
  }
`;

const BackgroundCircle = styled.circle`
  fill: ${({ checked }) => (checked ? '#6cbe45' : '#ccc')};
  transition: ease all 0.6s;
`;

const StrokeCircle = styled.circle`
  fill: none;
  stroke: #fff;
  stroke-miterlimit: 10;
  stroke-width: 2px;
  stroke-dashoffset: ${({ checked }) => (checked ? 0 : 100)};
  stroke-dasharray: 100;
  transition: ease all 0.6s;
`;

const CheckPolyline = styled.polyline`
  fill: none;
  stroke: #fff;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2px;
  stroke-dashoffset: ${({ checked }) => (checked ? 0 : 22)};
  stroke-dasharray: 22;
  transition: ease all 0.6s;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  margin: 0;
  opacity: 0;
  appearance: none;
`;

const CustomCheckbox = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <CheckboxWrapper>
      <HiddenCheckbox
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <svg viewBox="0 0 35.6 35.6">
        <BackgroundCircle
          checked={checked}
          className="background"
          cx="17.8"
          cy="17.8"
          r="17.8"
        />
        <StrokeCircle
          checked={checked}
          className="stroke"
          cx="17.8"
          cy="17.8"
          r="14.37"
        />
        <CheckPolyline
          checked={checked}
          className="check"
          points="11.78 18.12 15.55 22.23 25.17 12.87"
        />
      </svg>
    </CheckboxWrapper>
  );
};

export default CustomCheckbox;
