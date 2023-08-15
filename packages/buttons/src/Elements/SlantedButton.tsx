import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  --height: 4rem;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: 100%;
  font-weight: 900;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  border: 1px solid;
  box-sizing: border-box;
  display: grid;
  place-items: center;
  height: var(--height);
  overflow: hidden;
  padding: 0 3rem;
  position: relative;
  text-transform: uppercase;
  border-radius: 0;
  position: relative;

  span {
    font-weight: 900;
    mix-blend-mode: difference;
  }

  &::before {
    --middle: calc(var(--height) / 2);
    background: #fff;
    content: "";
    height: 100%;
    left: calc(var(--height) * -1);
    position: absolute;
    top: 0;
    transform: rotate(-90deg);
    transform-origin: var(--middle) var(--middle);
    transition: transform 0.3s;
    width: calc(100% + var(--height));
    z-index: -1;
  }

  &:hover::before {
    transform: rotate(0deg);
  }
`;

interface SlantedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const SlantedButton: React.FC<SlantedButtonProps> = ({ children, ...props }) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};

export default SlantedButton;
