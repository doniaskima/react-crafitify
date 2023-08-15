import React from 'react';
import styled, { css } from 'styled-components';

const RainbowFilll = styled.button`
  ${({ gradient }) =>
    gradient &&
    css`
      background: linear-gradient(90deg, ${gradient.start}, ${gradient.end});
    `}
  border-radius: 999px;
  box-sizing: border-box;
  color: ${({ textColor }) => textColor || '#000'};
  display: block;
  font-weight: 900;
  overflow: hidden;
  padding: ${({ padding }) => padding || '1.8rem 5rem'};
  position: relative;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 100%;
  line-height: 1.5;
  margin: 0;

  &:disabled {
    cursor: default;
  }

  svg {
    display: block;
    vertical-align: middle;
  }

  [hidden] {
    display: none;
  }

  span {
    background: ${({ textBackground }) => textBackground || '#1e293b'};
    border-radius: 999px;
    color: #fff;
    display: grid;
    inset: 5px;
    place-items: center;
    position: absolute;
    transition: background 0.3s;
  }

  &:hover span {
    background: none;
  }
}`;

const RainbowFill = ({ className , children, gradient, textColor, textBackground, padding }) => {
  return (
    <RainbowFilll className={className} gradient={gradient} textColor={textColor} textBackground={textBackground} padding={padding}>
      <span>{children}</span>
    </RainbowFilll>
  );
};

export default RainbowFill;
