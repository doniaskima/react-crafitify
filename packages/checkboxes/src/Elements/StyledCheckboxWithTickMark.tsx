import React, { useState } from 'react';
import styled from 'styled-components';

const CheckboxWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  width: 30px;
  height: 30px;
  margin: 0 auto;
  background-color: #f72414;
  transform: translateY(-50%);
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s ease transform, 0.2s ease background-color, 0.2s ease box-shadow;
  overflow: hidden;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    width: 24px;
    height: 23px;
    margin: 0 auto;
    background-color: #fff;
    transform: translateY(-50%);
    border-radius: 50%;
    box-shadow: inset 0 7px 10px #ffbeb8;
    transition: 0.2s ease width, 0.2s ease height;
  }

  &:hover:before {
    transform: translateY(-50%) scale(1.1);
    box-shadow: inset 0 7px 10px #ff9d96;
  }

  &:active {
    transform: translateY(-50%) scale(0.9);
  }
`;

const TickMark = styled.div`
  position: absolute;
  top: 0px;
  right: 0;
  left: 0;
  width: 15px;
  height: 18px;
  margin: 0 auto;
  margin-left: 5px;
  transform: rotateZ(-40deg);

  &:before,
  &:after {
    content: "";
    position: absolute;
    background-color: #fff;
    border-radius: 2px;
    opacity: 0;
    transition: 0.2s ease transform, 0.2s ease opacity;
  }

  &:before {
    left: 0;
    bottom: 0;
    width: 4px;
    height: 10px;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.23);
    transform: translateY(-68px);
  }

  &:after {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 4px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.23);
    transform: translateX(78px);
  }
`;

const StyledCheckboxWithTickMark: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(prevChecked => !prevChecked);
  };

  return (
    <CheckboxWrapper>
      <HiddenCheckbox
        id="_checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <Label htmlFor="_checkbox">
        <TickMark />
      </Label>
    </CheckboxWrapper>
  );
};

export default StyledCheckboxWithTickMark;
