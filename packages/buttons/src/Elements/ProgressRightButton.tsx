import React from 'react';
import styled from 'styled-components';

interface StyledButtonProps {
  backgroundColor?: string;
  textColor?: string;
  fontSize?: string;
  borderColor?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: button;
  background-color: ${(props) => props.backgroundColor || '#000'};
  background-image: none;
  color: ${(props) => props.textColor || '#fff'};
  cursor: pointer;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: ${(props) => props.fontSize || '100%'};
  font-weight: 900;
  line-height: 1.5;
  margin: 0;
  -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
  padding: 0;
  text-transform: uppercase;

  &:disabled {
    cursor: default;
  }

  &:-moz-focusring {
    outline: auto;
  }

  svg {
    display: block;
    vertical-align: middle;
  }

  [hidden] {
    display: none;
  }

  border-radius: 999px;
  border-width: 2px;
  box-sizing: border-box;
  display: block;
  overflow: hidden;
  padding: 1.2rem 3rem;
  position: relative;
  text-transform: uppercase;

  span {
    font-weight: 900;
    mix-blend-mode: difference;
  }

  &:before {
    background: #fff;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
  }

  &:hover:before {
    -webkit-animation: progress-bar 1.2s;
    animation: progress-bar 1.2s;
  }

  @-webkit-keyframes progress-bar {
    0% {
      opacity: 1;
      width: 0;
    }
    10% {
      opacity: 1;
      width: 15%;
    }
    25% {
      opacity: 1;
      width: 25%;
    }
    40% {
      opacity: 1;
      width: 35%;
    }
    55% {
      opacity: 1;
      width: 75%;
    }
    60% {
      opacity: 1;
      width: 100%;
    }
    to {
      opacity: 0;
      width: 100%;
    }
  }

  @keyframes progress-bar {
    0% {
      opacity: 1;
      width: 0;
    }
    10% {
      opacity: 1;
      width: 15%;
    }
    25% {
      opacity: 1;
      width: 25%;
    }
    40% {
      opacity: 1;
      width: 35%;
    }
    55% {
      opacity: 1;
      width: 75%;
    }
    60% {
      opacity: 1;
      width: 100%;
    }
    to {
      opacity: 0;
      width: 100%;
    }
  }
`;

interface ProgressRightButtonProps extends StyledButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

const ProgressRightButton: React.FC<ProgressRightButtonProps> = ({
  onClick,
  disabled,
  children,
  backgroundColor,
  textColor,
  fontSize,
  borderColor,
  className,
}) => {
  return (
    <StyledButton
      className={`btn-80 ${className || ''}`}
      onClick={onClick}
      disabled={disabled}
      backgroundColor={backgroundColor}
      textColor={textColor}
      fontSize={fontSize}
      borderColor={borderColor}
    >
      <span>{children}</span>
    </StyledButton>
  );
};

export default ProgressRightButton;
