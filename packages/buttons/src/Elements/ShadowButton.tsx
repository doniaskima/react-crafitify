import React from 'react';
import styled from 'styled-components';

const ShadowButtonWrapper = styled.button`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: ${props => props.textColor || '#000'};
  cursor: pointer;
  border: ${props => props.border || '3px solid'};
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  transition: top 0.2s, left 0.2s, box-shadow 0.2s, color 0.2s, border 0.2s;
  &:active {
    box-shadow: 0px 0px 0px 0px;
    top: 5px;
    left: 5px;
  }

  &:hover {
    color: ${props => props.hoverTextColor || props.textColor || '#000'};
    border: ${props => props.hoverBorder || props.border || '3px solid'};
    background-color: ${props => props.hoverBackgroundColor || 'transparent'};
  }

  @media (min-width: 768px) {
    padding: 0.25em 0.75em;
  }
`;

const ShadowButton = ({ children, ...props }) => {
  return <ShadowButtonWrapper {...props}>{children}</ShadowButtonWrapper>;
};

export default ShadowButton;
