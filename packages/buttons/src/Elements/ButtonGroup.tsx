import React from 'react';
import styled from 'styled-components';

interface ButtonGroupProps {
  vertical?: boolean;
}

const ButtonGroupWrapper = styled.div<ButtonGroupProps>`
  display: flex;
  flex-direction: ${props => (props.vertical ? 'column' : 'row')};
  gap: 8px;
`;

const ButtonGroupButton = styled.button`
  padding: 10px 20px;
  text-transform: uppercase;
  border-radius: 8px;
  font-size: 17px;
  font-weight: 500;
  color: #ffffff80;
  text-shadow: none;
  background: transparent;
  position: relative;
  transition: all 0.5s;
  overflow: hidden;
  border: 2px solid #ffffff80;

  &:hover,
  &:focus {
    color: #ffffff;
    background: #008cff;
    border: 2px solid #008cff;
    text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
    box-shadow: 0 0 5px #008cff, 0 0 20px #008cff, 0 0 50px #008cff, 0 0 100px #008cff;
  }
};`

interface ButtonGroupType extends React.FC<ButtonGroupProps> {
  Button: typeof ButtonGroupButton;
}

const ButtonGroup: ButtonGroupType = ({ vertical, children }) => {
  return <ButtonGroupWrapper vertical={vertical}>{children}</ButtonGroupWrapper>;
};

ButtonGroup.Button = ButtonGroupButton;

export default ButtonGroup;
