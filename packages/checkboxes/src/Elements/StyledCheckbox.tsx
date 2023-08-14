import React, { useState } from 'react';
import styled from 'styled-components';

const CheckboxWrapper = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  visibility: hidden;
  display: none;
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  cursor: pointer;

  svg {
    vertical-align: middle;
  }
`;

const StyledCheckbox: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <CheckboxWrapper>
      <HiddenCheckbox
        type="checkbox"
        className="check"
        id="check1-62"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <Label htmlFor="check1-62" className="label">
        <svg width="43" height="43" viewBox="0 0 90 90">
          <rect x="30" y="20" width="50" height="50" stroke="black" fill="none" />
          <g transform="translate(0,-952.36218)">
            <path d="m 13,983 c 33,6 40,26 55,48 " stroke="black" strokeWidth="3" className="path1" fill="none" />
            <path d="M 75,970 C 51,981 34,1014 25,1031 " stroke="black" strokeWidth="3" className="path1" fill="none" />
          </g>
        </svg>
        <span>Checkbox</span>
      </Label>
    </CheckboxWrapper>
  );
};

export default StyledCheckbox;
