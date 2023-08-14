import React from 'react';
import styled from 'styled-components';

const CheckboxWrapper = styled.div`
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })<React.HTMLProps<HTMLInputElement>>`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  border: 1px solid #adb5bd;
  transition: 0.4s;
  border-radius: 30px;

  &:before {
    content: "";
    position: absolute;
    height: 1.4em;
    width: 1.4em;
    border-radius: 20px;
    left: 0.27em;
    bottom: 0.25em;
    background-color: #adb5bd;
    transition: 0.4s;
  }
};`

const CheckedSlider = styled(Slider)`
  background-color: #007bff;
  border: 1px solid #007bff;

  &:before {
    transform: translateX(1.4em);
    background-color: #fff;
  }
`;

const StyledSwitch: React.FC = () => {
  const [checked, setChecked] = React.useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <CheckboxWrapper>
      <HiddenCheckbox type="checkbox" checked={checked} onChange={handleCheckboxChange} />
      <CheckedSlider className="slider" />
    </CheckboxWrapper>
  );
};

export default StyledSwitch;
