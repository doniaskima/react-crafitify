import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import this to use jest-dom matchers

import { PrimaryButton } from '../PrimaryButton';

describe('PrimaryButton', () => {
  test('renders the button with the default label', () => {
    const { getByText } = render(<PrimaryButton>Click Me</PrimaryButton>);
    expect(getByText('Click Me')).toBeInTheDocument();
  });

  test('renders the button as disabled', () => {
    const { getByText } = render(<PrimaryButton disabled>Disabled Button</PrimaryButton>);
    expect(getByText('Disabled Button')).toBeDisabled();
  });

  test('renders the button with custom class name', () => {
    const { getByText, container } = render(
      <PrimaryButton className="custom-button">Custom Style</PrimaryButton>
    );
    const button = getByText('Custom Style');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('custom-button');
    expect(container.firstChild).toMatchSnapshot();
  });

  test('calls the custom onClick handler when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <PrimaryButton onClick={onClickMock}>Custom OnClick</PrimaryButton>
    );
    const button = getByText('Custom OnClick');
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
