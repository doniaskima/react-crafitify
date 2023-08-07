import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
 

import FancyShadowButton from '../FancyShadowButton';

describe('FancyShadowButton', () => {
  it('renders with the provided children', () => {
    const { getByText } = render(<FancyShadowButton>Click Me</FancyShadowButton>);
    expect(getByText('Click Me')).toBeInTheDocument();
  });

  it('changes background color on hover', () => {
    const { getByText } = render(<FancyShadowButton hoverColor="#FF0000">Hover Me</FancyShadowButton>);
    const button = getByText('Hover Me');

    fireEvent.mouseEnter(button);
    expect(button).toHaveStyle('background-color: #FF0000');

    fireEvent.mouseLeave(button);
    expect(button).not.toHaveStyle('background-color: #FF0000');
  });

});
