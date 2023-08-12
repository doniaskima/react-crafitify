import React from 'react';
import styled from 'styled-components';

export interface GradientGemButtonProps {
  backgroundColor?: string;
  textColor?: string;
  spanBackgroundColor?: string;
  spanBackgroundHover?: string;
  fontSize?: string;
  height?: string; 
  width?: string; 
  padding?: string;  
  className?: string;
}

const ButtonWrapper = styled.button<GradientGemButtonProps>`
  align-items: center;
  display:flex;
  align-items:center;
  justify-content:center;
  background-image: ${(props) => props.backgroundColor || 'linear-gradient(144deg, #AF40FF, #5B42F3 50%, #00DDEB)'};
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: ${(props) => props.textColor || '#FFFFFF'};
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: ${(props) => props.fontSize || '20px'};
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: ${(props) => props.width || '140px'}; // Use the width prop, default to 140px
  height: ${(props) => props.height || 'auto'}; // Use the height prop, default to auto
  padding: ${(props) => props.padding || '3px'}; // Use the padding prop, default to 3px
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;

  &:active,
  &:hover {
    outline: 0;
  }

  span {
    background-color: ${(props) => props.spanBackgroundColor || 'rgb(5, 6, 45)'};
    padding: 16px 24px;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    transition: 300ms;
  }

  &:hover span {
    background: ${(props) => props.spanBackgroundHover || 'none'};
  }

  @media (min-width: 768px) {
    font-size: ${(props) => props.fontSize || '24px'};
    min-width: ${(props) => props.width || '196px'};
  }
};`

const GradientGemButton: React.FC<GradientGemButtonProps> = ({
  backgroundColor,
  textColor,
  spanBackgroundColor,
  spanBackgroundHover,
  fontSize,
  height,
  width,
  padding,
  className,
}) => {
  return (
    <ButtonWrapper
      backgroundColor={backgroundColor}
      textColor={textColor}
      spanBackgroundColor={spanBackgroundColor}
      spanBackgroundHover={spanBackgroundHover}
      fontSize={fontSize}
      height={height}
      width={width}
      className={className}
      padding={padding}
    >
      <span className="text">GradientGemButton</span>
    </ButtonWrapper>
  );
};

export default GradientGemButton;
