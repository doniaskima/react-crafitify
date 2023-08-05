import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DiagonalSwipeButton from '../DiagonalSwipeButton';

// Sample test cases
test('renders button with default text', () => {
  const { getByText } = render(<DiagonalSwipeButton>Click Me</DiagonalSwipeButton>);
  const buttonElement = getByText('Click Me');
  expect(buttonElement).toBeInTheDocument();
});

test('changes color on hover', () => {
  const { getByText } = render(<DiagonalSwipeButton>Hover Me</DiagonalSwipeButton>);
  const buttonElement = getByText('Hover Me');
  fireEvent.mouseEnter(buttonElement);

  // Get the computed style of the button element
  const computedStyle = window.getComputedStyle(buttonElement);
  
  // Check if the computed color includes "white" or "ButtonText"
  expect(computedStyle.color).toMatch(/white|ButtonText/);
});
