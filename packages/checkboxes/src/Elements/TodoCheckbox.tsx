import React, { useState } from 'react';
import styled, { DefaultTheme } from 'styled-components';

interface TodoCheckboxProps {
  onChange?: (isChecked: boolean) => void;
  className?: string;
  theme?: DefaultTheme;
  label?: string;  
}

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Source Sans Pro', sans-serif;
  cursor: pointer;
  user-select: none;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  width: 1.5em;
  height: 1.5em;
  border: 1px solid ${(props) =>
    props.checked ? props.theme.green : props.theme.gray};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5em;
  background-color: ${(props) =>
    props.checked ? props.theme.green : props.theme.white};
  transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);

  svg {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;

const CheckMark = styled.svg<{ checked: boolean }>`
  fill: none;
  stroke: ${(props) =>
    props.checked ? props.theme.white : props.theme.black};
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

const Label = styled.label<{ checked: boolean }>`
  font-size: 1.5em;
  font-weight: 600;
  color: ${(props) => props.checked ? props.theme.lightgray : props.theme.black};
  text-decoration: ${(props) => props.checked ? 'line-through' : 'none'};
  text-decoration-thickness: 3px;
  text-decoration-color: ${(props) => props.theme.black};
  transition: color 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;


const TodoCheckbox: React.FC<TodoCheckboxProps> = ({
  onChange,
  className,
  theme,
  label = 'Default Label', 
}) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <CheckboxWrapper className={className}>
      <HiddenCheckbox
        id="todo"
        name="todo"
        value="todo"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <StyledCheckbox checked={checked} theme={theme || defaultTheme}>
        <CheckMark
          checked={checked}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <polyline points="20 6 9 17 4 12" />
        </CheckMark>
      </StyledCheckbox>
      <Label
        checked={checked}
        htmlFor="todo"
        data-content={label} 
      >
        {label}
      </Label>
    </CheckboxWrapper>
  );
};

const defaultTheme = {
  black: '#363839',
  lightgray: '#9c9e9f',
  gray: '#bdc1c6',
  white: '#fff',
  green: '#bdc1c6',
};

export default TodoCheckbox;