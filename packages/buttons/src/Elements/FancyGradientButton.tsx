// FancyGradientButton.tsx
import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

 

const StyledButton = styled.button<FancyGradientButtonProps>`
  --min-width: ${(props) => (props.size === 'large' ? '220px' : props.size === 'small' ? '150px' : '180px')};
  --min-height: 42px;
  --ring-min-size: 20px;
  --ring-max-size: 150px;
  --ring-width: 3px;
  --main-bg-color: ${(props) => props.mainBgColor || '#814fd1'};
  --gradient-bg-color-1: ${(props) => props.gradientBgColor1 || 'rgb(222, 203, 226)'};
  --gradient-bg-color-2: ${(props) => props.gradientBgColor2 || 'rgb(79, 131, 209)'};
  --ring-color: ${(props) => props.ringColor || '#6f00ff'};
  --shadow-color: ${(props) => props.shadowColor || 'rgba(79, 99, 209, 0.64)'};
  --hover-shadow-color: ${(props) => props.hoverShadowColor || 'rgba(79, 99, 209, 0.64)'};
  --main-fg-color: ${(props) => props.mainFgColor || '#313133'};
  --hover-fg-color: ${(props) => props.hoverFgColor || 'rgb(38, 11, 53)'};

  min-width: var(--min-width);
  min-height: var(--min-height);
  font-size: 17px;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--main-fg-color);
  background: var(--main-bg-color);
  background: linear-gradient(
    66deg,
    var(--gradient-bg-color-1) 0%,
    var(--gradient-bg-color-2) 100%
  );
  border: none;
  border-radius: 999px;
  box-shadow: 12px 2px 24px var(--shadow-color);
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;

  &:before {
    content: '';
    border-radius: 999px;
    min-width: calc(var(--min-width) + 12px);
    min-height: calc(var(--min-height) + 12px);
    border: var(--ring-width) solid var(--ring-color);
    box-shadow: 0 0 60px var(--hover-shadow-color);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover,
  &:focus {
    color: var(--hover-fg-color);
    transform: translateY(-6px);
  }

  &:active {
    color: var(--main-fg-color);
    transform: scale(0.95);
  }

  &:active:before {
    border: 0px solid var(--ring-color);
  }

  &:hover:before,
  &:focus:before {
    opacity: 1;
  }

  &:after {
    content: '';
    width: var(--ring-min-size);
    height: var(--ring-min-size);
    border-radius: 100%;
    border: var(--ring-width) solid var(--ring-color);
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ring 1.5s infinite;
  }

  &:hover:after,
  &:focus:after {
    animation: none;
    display: none;
  }
}

@keyframes ring {
  0% {
    width: var(--ring-min-size);
    height: var(--ring-min-size);
    opacity: 0.5;
  }
  100% {
    width: var(--ring-max-size);
    height: var(--ring-max-size);
    opacity: 0;
  }
}`
interface FancyGradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  mainBgColor?: string;
  gradientBgColor1?: string;
  gradientBgColor2?: string;
  ringColor?: string;
  shadowColor?: string;
  hoverShadowColor?: string;
  mainFgColor?: string;
  hoverFgColor?: string;
  className?: string;
}

const FancyGradientButton: React.FC<FancyGradientButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default FancyGradientButton;

 