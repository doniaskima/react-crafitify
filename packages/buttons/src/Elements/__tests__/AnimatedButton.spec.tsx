import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For extended DOM matchers
import AnimatedButton from '../AnimatedButton';

 

// Sample test cases
test('renders button with default label', () => {
  const { getByText } = render(<AnimatedButton>Click Me</AnimatedButton>);
  const buttonElement = getByText('Click Me');
  expect(buttonElement).toBeInTheDocument();
});

test('calls custom onClick handler when clicked', () => {
  const onClickMock = jest.fn();
  const { getByText } = render(
    <AnimatedButton onClick={onClickMock}>Click Me</AnimatedButton>
  );
  const buttonElement = getByText('Click Me');
  fireEvent.click(buttonElement);
  expect(onClickMock).toHaveBeenCalledTimes(1);
});
