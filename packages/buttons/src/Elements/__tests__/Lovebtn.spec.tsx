import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers

import Lovebtn from '../Lovebtn'; 

describe('Lovebtn Component', () => {
  test('renders the button with children', () => {
    render(<Lovebtn>Click Me!</Lovebtn>);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Click Me!');
  });

  test('button hover effect', () => {
    render(<Lovebtn>Click Me!</Lovebtn>);

    const buttonElement = screen.getByRole('button');

    // Check that the button does not have the class "hovered" initially
    expect(buttonElement).not.toHaveClass('hovered');

    // Fire a hover event on the button
    fireEvent.mouseEnter(buttonElement);

    // Check that the button now has the class "hovered"
    expect(buttonElement).toHaveClass('hovered');

    // Fire a mouse leave event on the button to remove the hover effect
    fireEvent.mouseLeave(buttonElement);

    // Check that the button no longer has the class "hovered"
    expect(buttonElement).not.toHaveClass('hovered');
  });
});
