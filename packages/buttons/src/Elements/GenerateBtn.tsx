import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  border: none;
  width: 15em;
  height: 5em;
  border-radius: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background: #1C1A1C;
  cursor: pointer;
  transition: all 450ms ease-in-out;
  position: relative;

  &:hover {
    background: linear-gradient(0deg, #A47CF3, #683FEA);
    box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4),
                inset 0px -4px 0px 0px rgba(0, 0, 0, 0.2),
                0px 0px 0px 4px rgba(255, 255, 255, 0.2),
                0px 0px 180px 0px #9917FF;
    transform: translateY(-2px);
  }

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
`;

const SparkleIcon = styled.svg`
  fill: #AAAAAA;
  transition: all 800ms ease;
`;

const Text = styled.span`
  font-weight: 600;
  color: #AAAAAA;
  font-size: medium;
`;

interface GenerateBtnProps {
  children: React.ReactNode; 
  onClick: () => void;
  disabled: boolean;
  loading?: boolean;
}

const GenerateBtn: React.FC<GenerateBtnProps> = ({ children, onClick, disabled, loading = false, ...rest }) => {
  const [isSparkling, setIsSparkling] = useState(false);

  const handleOnClick = () => {
    if (!disabled && !loading) {
      onClick && onClick();
      setIsSparkling(true);
      setTimeout(() => setIsSparkling(false), 800);
    }
  };

  return (
    <StyledButton onClick={handleOnClick} disabled={disabled || loading} {...rest}>
      {isSparkling && (
        <SparkleIcon
          height="24"
          width="24"
          fill="#FFFFFF"
          viewBox="0 0 24 24"
          data-testid="sparkle-icon"
          className={isSparkling ? 'sparkle' : ''}
        >
          <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z" />
        </SparkleIcon>
      )}
      <Text>{loading ? 'Loading...' : children}</Text>
    </StyledButton>
  );
};


export default GenerateBtn;