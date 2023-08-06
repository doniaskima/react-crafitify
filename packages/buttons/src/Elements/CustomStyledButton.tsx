import React from 'react';
import styled from 'styled-components';

interface CustomStyledButtonProps {
  design?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
  textColor?: string;
  hoverColor?: string;
  activeColor?: string;
  children: React.ReactNode;
}

const StyledButton = styled.button<CustomStyledButtonProps>`
  --btn-bg: ${(props) => props.backgroundColor || '#f0f0f0'};
  --btn-gradient-from: ${(props) => (props.design === 'primary' ? '#111111' : '#f0f0f0')};
  --btn-gradient-to: ${(props) =>
    props.design === 'primary' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  --btn-text-color: ${(props) => props.textColor || '#111111'};
  --btn-color: ${(props) => (props.design === 'primary' ? '#5f17d4' : '#3c3c3c')};
  --btn-color-from: ${(props) => (props.design === 'primary' ? '#c6a3ff' : '#dddddd')};
  --btn-color-to: ${(props) => (props.design === 'primary' ? '#966ed8' : '#a0a0a0')};
  --btn-shadow: ${(props) => (props.design === 'primary' ? '#5f17d42d' : '#dddddd2d')};

  border: 0 none;
  appearance: none;
  border-radius: 9999px;
  background-color: var(--btn-bg);
  box-shadow: 0 0 2px 2px var(--btn-shadow), 0 0 4px 4px var(--btn-shadow), 0 0 8px 8px var(--btn-shadow);
  cursor: pointer;
  transition: transform 0.5s ease-in-out;

  &:hover,
  &:active {
    transform: translateY(-1px);
  }

  .btn-inner {
    position: relative;
    border-radius: inherit;
    border: 1px solid transparent;
    font-size: ${(props) => {
      switch (props.size) {
        case 'small':
          return '0.8rem';
        case 'medium':
          return '1rem';
        case 'large':
        default:
          return '1.2rem';
      }
    }};
    display: flex;
    align-items: center;
    min-width: ${(props) => {
      switch (props.size) {
        case 'small':
          return '8rem';
        case 'medium':
          return '10rem';
        case 'large':
        default:
          return '12rem';
      }
    }};
    padding: ${(props) => {
      switch (props.size) {
        case 'small':
          return '0.8rem 1.5rem';
        case 'medium':
          return '1rem 2rem';
        case 'large':
        default:
          return '1.5rem 2.5rem';
      }
    }};
    overflow: hidden;
    color: var(--btn-text-color);

    .btn-label {
      position: absolute;
      bottom: 1px;
      left: 1px;
      right: 1px;
      top: 1px;
      border-radius: inherit;
      z-index: 10;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--btn-bg);
      background-image: linear-gradient(to bottom, var(--btn-gradient));
    }

    .btn-blur {
      position: absolute;
      bottom: 1px;
      left: 1px;
      right: 1px;
      top: 1px;
      z-index: 0;
      transform: scaleX(3.5);
      filter: blur(6px);

      &:before {
        --gradient: var(--btn-color-from), var(--btn-color), var(--btn-color-to);
        --transition: 5s;
        content: '';
        position: absolute;
        z-index: 0;
        top: 50%;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: conic-gradient(var(--gradient));
        animation: turn var(--transition) linear infinite;
      }
    }
  }

  @keyframes turn {
    0% {
      transform: translateY(-50%) rotate(0deg);
    }
    to {
      transform: translateY(-50%) rotate(1turn);
    }
  }
};`

const CustomStyledButton: React.FC<CustomStyledButtonProps> = ({
  design = 'primary',
  size = 'medium',
  backgroundColor,
  textColor,
  hoverColor,
  activeColor,
  children,
}) => {
  return (
    <StyledButton
      design={design}
      size={size}
      backgroundColor={backgroundColor}
      textColor={textColor}
      hoverColor={hoverColor}
      activeColor={activeColor}
    >
      <span className="btn-inner">
        <span className="btn-label">{children}</span>
        <span className="btn-blur" aria-hidden=""></span>
      </span>
    </StyledButton>
  );
};

export default CustomStyledButton;
