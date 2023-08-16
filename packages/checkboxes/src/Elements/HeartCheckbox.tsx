import React from 'react';
import styled from 'styled-components';

interface HeartCheckboxProps {
  checked: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxWrapper = styled.div`
  display: inline-block;
  outline: none;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const Label = styled.label`
  --size: 50px;
  --shadow: calc(var(--size) * .07) calc(var(--size) * .1);
  position: relative;
  display: block;
  width: var(--size);
  height: var(--size);
  margin: 0 auto;
  background-color: #4158D0;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
  border-radius: 50%;
  box-shadow: 0 var(--shadow) #ffbeb8;
  cursor: pointer;
  transition: 0.2s ease transform, 0.2s ease background-color, 0.2s ease box-shadow;
  overflow: hidden;
  z-index: 1;
`;

const LabelBefore = styled.div`
  content: "";
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  width: calc(var(--size) * .7);
  height: calc(var(--size) * .7);
  margin: 0 auto;
  background-color: #fff;
  transform: translateY(-50%);
  border-radius: 50%;
  box-shadow: inset 0 var(--shadow) #ffbeb8;
  transition: 0.2s ease width, 0.2s ease height;
`;

const HoveredLabelBefore = styled(LabelBefore)`
  width: calc(var(--size) * .55);
  height: calc(var(--size) * .55);
  box-shadow: inset 0 var(--shadow) #ff9d96;
`;

const TickMark = styled.div`
  position: absolute;
  top: -1px;
  right: 0;
  left: calc(var(--size) * -.05);
  width: calc(var(--size) * .6);
  height: calc(var(--size) * .6);
  margin: 0 auto;
  margin-left: calc(var(--size) * .14);
  transform: rotateZ(-40deg);
`;

const TickMarkBefore = styled.div`
  content: "";
  position: absolute;
  background-color: #fff;
  border-radius: 2px;
  opacity: 0;
  transition: 0.2s ease transform, 0.2s ease opacity;
  left: 0;
  bottom: 0;
  width: calc(var(--size) * .1);
  height: calc(var(--size) * .3);
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.23);
  transform: translateY(calc(var(--size) * -.68));
`;

const TickMarkAfter = styled.div`
  content: "";
  position: absolute;
  background-color: #fff;
  border-radius: 2px;
  opacity: 0;
  transition: 0.2s ease transform, 0.2s ease opacity;
  left: 0;
  bottom: 0;
  width: 100%;
  height: calc(var(--size) * .1);
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.23);
  transform: translateX(calc(var(--size) * .78));
`;

const HeartCheckbox: React.FC<HeartCheckboxProps> = ({ checked, onChange }) => {
  return (
    <CheckboxWrapper>
      <HiddenCheckbox id="_checkbox-26" type="checkbox" checked={checked} onChange={onChange} />
      <Label htmlFor="_checkbox-26">
        <LabelBefore />
        <TickMark>
          <TickMarkBefore />
          <TickMarkAfter />
        </TickMark>
      </Label>
    </CheckboxWrapper>
  );
};

export default HeartCheckbox;
