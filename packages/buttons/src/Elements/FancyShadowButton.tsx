import React from 'react';
import styled from 'styled-components';

interface FancyShadowButtonProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  hoverColor?: string;
  bgColor?: string;
  children: React.ReactNode;
}

const StyledButton = styled.button<FancyShadowButtonProps>`
  position: relative;
  padding-top: ${(props) => (props.size === 'large' ? '1rem' : props.size === 'small' ? '0.5rem' : '0.75rem')};
  padding-right: 1.5rem;
  padding-bottom: ${(props) => (props.size === 'large' ? '1rem' : props.size === 'small' ? '0.5rem' : '0.75rem')};
  padding-left: 1.5rem;
  transition: all 0.3s;
  border-radius: 0.5rem;
  color: #000;
  font-weight: bold;
  font-size: 1.2rem;
  border: none;
  background-color: ${(props) => props.bgColor || 'transparent'}; // Use the bgColor prop here

  &:hover {
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #000000;
    background-color: ${(props) => props.hoverColor || props.color || props.bgColor || 'transparent'};
  }

  svg {
    pointer-events: none;
    opacity: 1;
    border-radius: 0.5rem;
    mix-blend-mode: soft-light;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
}`;

const FancyShadowButton: React.FC<FancyShadowButtonProps> = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      <svg>
        <filter id="pedroduarteisalegend">
          <feTurbulence stitchTiles="stitch" numOctaves="4" baseFrequency="0.5" type="fractalNoise"></feTurbulence>
        </filter>
        <rect filter="url(#pedroduarteisalegend)" height="100%" width="100%"></rect>
      </svg>
      {children}
    </StyledButton>
  );
};

export default FancyShadowButton;
