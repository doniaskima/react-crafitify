import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0);
  }

  50% {
    transform: rotate(180deg);
    border-top-color: rgb(139, 46, 46);
    border-bottom-color: rgb(243, 92, 33);
    border-right-color: transparent;
    border-left-color: transparent;
  }

  100% {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
  width: 50px;
  height: 50px;
  display: inline-block;
  border: 5px solid ${props => props.color || 'rgb(255, 17, 0)'};
  border-radius: 50%;
  border-top-color: transparent;
  border-bottom-color: transparent;
  animation: ${rotateAnimation} 1s infinite;
`;

const RotatingCircleBorderLoader = ({ color, className }) => {
  return <LoaderContainer color={color} className={className} />;
};

RotatingCircleBorderLoader.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

export default RotatingCircleBorderLoader;
