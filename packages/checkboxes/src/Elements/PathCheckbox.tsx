import React, { useState } from 'react';
import styled from 'styled-components';

interface PathCheckboxProps {
  onChange: (isChecked: boolean) => void;
  className?: string;
  uncheckedColor?: string;
  checkedColor?: string;
}

const CheckboxWrapper = styled.div.attrs<PathCheckboxProps>((props) => props)<PathCheckboxProps>`
  * {
    box-sizing: border-box;
  }

  input {
    position: absolute;
    opacity: 0;
  }

  input:checked + label svg path {
    stroke-dashoffset: 0;
  }

  input:focus + label {
    transform: scale(1.03);
  }

  input + label {
    display: block;
    border: 2px solid #333;
    width: var(--size);
    height: var(--size);
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  input + label:active {
    transform: scale(1.05);
    border-radius: 12px;
  }

  input + label svg {
    pointer-events: none;
    padding: 5%;
  }

  input + label svg path {
    fill: none;
    /* Updated stroke color based on uncheckedColor prop */
    stroke: ${(props) => props.uncheckedColor || '#333'};
    stroke-width: 4px;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 100;
    stroke-dashoffset: 101;
    transition: all 250ms cubic-bezier(1, 0, 0.37, 0.91);
  }
`;


const PathCheckbox: React.FC<PathCheckboxProps> = ({
  onChange,
  className,
  uncheckedColor,
  checkedColor,
}) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange(newChecked);
  };

  return (
    <CheckboxWrapper
      className={className}
      uncheckedColor={uncheckedColor}
      checkedColor={checkedColor}
    >
      <input
        type="checkbox"
        id="path-checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="path-checkbox" style={{ '--size': '30px' }}>
        <svg viewBox="0,0,50,50">
          <path d="M5 30 L 20 45 L 45 5"></path>
        </svg>
      </label>
    </CheckboxWrapper>
  );
};

export default PathCheckbox;