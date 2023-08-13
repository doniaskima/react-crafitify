import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const loaderBarAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LoaderText = styled.div`
  font-size: 24px;
  color: ${props => props.textColor || 'rgb(0, 0, 0)'};
  margin-bottom: 20px;
  align-self: center;
`;

const LoaderBar = styled.div`
  width: 30%;
  height: 10px;
  border-radius: 5px;
  background-color: ${props => props.barColor || 'rgb(0, 0, 0)'};
  animation: ${loaderBarAnimation} 2s ease-in-out infinite;
`;

const LoadingBar = ({ text, textColor, barColor, className }) => {
  return (
    <LoaderContainer className={`loader ${className || ''}`}>
      <LoaderText className="loader-text" textColor={textColor}>
        {text || 'Loading...'}
      </LoaderText>
      <LoaderBar className="loader-bar" barColor={barColor} />
    </LoaderContainer>
  );
};

LoadingBar.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string,
  barColor: PropTypes.string,
  className: PropTypes.string,
};

export default LoadingBar;
