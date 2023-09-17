import React from 'react';
import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  width: ${({ size }) => size || '150px'};
  height: ${({ size }) => size || '150px'};
  position: relative;
  margin: 30px auto;
  overflow: hidden;
`;

const Spinner = styled.div`
  position: absolute;
  width: calc(100% - 9.9px);
  height: calc(100% - 9.9px);
  border: 5px solid transparent;
  border-radius: 50%;
  border-top-color: ${({ color }) => color || '#e15b64'};
  animation: ${spinAnimation} 5s cubic-bezier(0.17, 0.49, 0.96, 0.79) infinite;
`;

const NestedSpinner = styled(Spinner)`
  margin: 8px;
`;

const Codecite = ({ colors, size }) => {
  return (
    <SpinnerContainer size={size}>
      <Spinner color={colors[0]}>
        <NestedSpinner color={colors[1]}>
          <NestedSpinner color={colors[2]}>
            <NestedSpinner color={colors[3]}>
              <NestedSpinner color={colors[4]}>
                <NestedSpinner color={colors[5]}>
                  <Spinner color={colors[6]} />
                </NestedSpinner>
              </NestedSpinner>
            </NestedSpinner>
          </NestedSpinner>
        </NestedSpinner>
      </Spinner>
    </SpinnerContainer>
  );
};

export default Codecite;
