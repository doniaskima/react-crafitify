import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

interface TertiaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  textColor?: string;
  borderColor?: string;
  bgColor?: string;
  shadowColor?: string;
  className?: string;
}

const StyledButton = styled.button<TertiaryButtonProps>`
padding: 10px 20px;
text-transform: uppercase;
cursor:pointer;
border-radius: 8px;
font-size: 17px;
font-weight: 500;
color: ${(props) => props.textColor || '#00000080'}; // Changed to black
text-shadow: none;
background: transparent;
box-shadow: transparent;
border: 1px solid ${(props) => props.borderColor || '#00000080'};
transition: 0.5s ease;
user-select: none;

&:hover,
&:focus {
  color: #ffffff;
  background: ${(props) => props.bgColor || '#008cff'};
  border: 1px solid ${(props) => props.borderColor || '#008cff'};
  text-shadow: ${(props) =>
    `0 0 5px ${props.shadowColor || '#ffffff'},
     0 0 10px ${props.shadowColor || '#ffffff'},
     0 0 20px ${props.shadowColor || '#ffffff'}`};
  box-shadow: ${(props) =>
    `0 0 5px ${props.shadowColor || '#008cff'},
     0 0 20px ${props.shadowColor || '#008cff'},
     0 0 50px ${props.shadowColor || '#008cff'},
     0 0 100px ${props.shadowColor || '#008cff'}`};
}
`;
 
const TertiaryButton: React.FC<TertiaryButtonProps> = ({ children, className,...rest }) => {
  return <StyledButton className={className} {...rest}>{children}</StyledButton>;
};

export default TertiaryButton;