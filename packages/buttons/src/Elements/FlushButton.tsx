import React from 'react';
import styled from 'styled-components';

const FlushButtonWrapper = styled.button`
  --content: '${props => props.content}';
  --text-color: ${props => props.textColor || 'hsla(210, 50%, 85%, 1)'};
  --shadow-color: ${props => props.shadowColor || 'hsla(210, 40%, 52%, .4)'};
  --btn-color: ${props => props.btnColor || 'hsl(210, 80%, 42%)'};
  --bg-color: ${props => props.bgColor || '#141218'};
  display:flex;
  justify-content:center;
  align-items:center;
  position: relative;
  padding: 10px 20px;
  border: none;
  background: none;
  cursor: pointer;
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  font-family: 'Source Code Pro';
  font-weight: 900;
  text-transform: uppercase;
  font-size: ${props => props.fontSize || '30px'};
  color: var(--text-color);
  
  background-color: var(--btn-color);
  box-shadow: var(--shadow-color) 2px 2px 22px;
  border-radius: 4px;
  z-index: 0;
  overflow: hidden;
  
  &:focus {
    outline-color: transparent;
    box-shadow: var(--btn-color) 2px 2px 22px;
  }
  
  .right::after, &::after {
    content: var(--content);
    display: block;
    position: absolute;
    white-space: nowrap;
    padding: 40px 40px;
    pointer-events: none;
  }
  
  &::after {
    font-weight: 200;
    top: -30px;
    left: -20px;
  }
  
  .right, .left {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
  }
  
  .right {
    left: 66%;
  }
  
  .left {
    right: 66%;
  }
  
  .right::after {
    top: -30px;
    left: calc(-66% - 20px);
    background-color: var(--bg-color);
    color: transparent;
    transition: transform 0.4s ease-out;
    transform: translate(0, -90%) rotate(0deg);
  }
  
  &:hover .right::after {
    transform: translate(0, -47%) rotate(0deg);
  }
  
  &:hover .right:hover::after {
    transform: translate(0, -50%) rotate(-7deg);
  }
  
  &:hover .left:hover ~ .right::after {
    transform: translate(0, -50%) rotate(7deg);
  }
  
  /* bubbles */
  &::before {
    content: '';
    pointer-events: none;
    opacity: 0.6;
    background:
      radial-gradient(circle at 20% 35%, transparent 0, transparent 2px, var(--text-color) 3px, var(--text-color) 4px, transparent 4px),
      radial-gradient(circle at 75% 44%, transparent 0, transparent 2px, var(--text-color) 3px, var(--text-color) 4px, transparent 4px),
      radial-gradient(circle at 46% 52%, transparent 0, transparent 4px, var(--text-color) 5px, var(--text-color) 6px, transparent 6px);
    width: 100%;
    height: 300%;
    top: 0;
    left: 0;
    position: absolute;
    animation: bubbles 5s linear infinite both;
  }
  
  @keyframes bubbles {
    from {
      transform: translate();
    }
    to {
      transform: translate(0, -66.666%);
    }
  }
`;

const FlushButton = ({ content, ...props }) => {
  return <FlushButtonWrapper content={content} {...props} />;
};

export default FlushButton;
