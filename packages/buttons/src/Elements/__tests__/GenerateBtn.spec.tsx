import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import GenerateBtn from '../GenerateBtn';

test('renders button with text', () => {
    const { getByText } = render(
      <GenerateBtn onClick={() => {}} disabled={false} loading={false}>
        Click Me
      </GenerateBtn>
    );
    expect(getByText('Click Me')).toBeInTheDocument();
  });
  

test('button click triggers onClick callback', () => {
  const onClickMock = jest.fn();
  const { getByText } = render(
    <GenerateBtn onClick={onClickMock} disabled={false} loading={false}>
      Click Me
    </GenerateBtn>
  );

  const button = getByText('Click Me');
  fireEvent.click(button);

  expect(onClickMock).toHaveBeenCalledTimes(1);
});

test('button is disabled and shows loading text during loading state', async () => {
  const { getByText } = render(
    <GenerateBtn onClick={() => {}} disabled={true} loading={true}>
      Click Me
    </GenerateBtn>
  );

  const button = getByText('Click Me');
  expect(button).toBeDisabled();

  await waitFor(() => {
    expect(getByText('Loading...')).toBeInTheDocument();
  });
});

test('button is not clickable during loading state', () => {
  const onClickMock = jest.fn();
  const { getByText } = render(
    <GenerateBtn onClick={onClickMock} disabled={true} loading={true}>
      Click Me
    </GenerateBtn>
  );

  const button = getByText('Click Me');
  fireEvent.click(button);

  expect(onClickMock).not.toHaveBeenCalled();
});

test('button shows sparkle animation on click', async () => {
    const { getByText, getByTestId } = render(<GenerateBtn>Click Me</GenerateBtn>);
  
    const button = getByText('Click Me');
    fireEvent.click(button);
  
    // Wait for the sparkle animation to finish (800ms)
    await waitFor(() => getByTestId('sparkle-icon'));
  
    const sparkleIcon = getByTestId('sparkle-icon');
    expect(sparkleIcon).toHaveClass('sparkle');
  });
 
  
  
  
  