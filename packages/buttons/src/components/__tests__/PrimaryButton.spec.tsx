import React from 'react';
import { shallow } from 'enzyme';
import PrimaryButton from '../PrimaryButton';

describe('PrimaryButton', () => {
  it('should render the button text', () => {
    const buttonText = 'Click Me';
    const wrapper = shallow(<PrimaryButton>{buttonText}</PrimaryButton>);
    expect(wrapper.text()).toBe(buttonText);
  });

  it('should call the onClick handler when clicked', () => {
    const onClickMock = jest.fn();
    const wrapper = shallow(<PrimaryButton onClick={onClickMock}>Click Me</PrimaryButton>);
    wrapper.simulate('click');
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled prop is true', () => {
    const wrapper = shallow(<PrimaryButton disabled>Click Me</PrimaryButton>);
    expect(wrapper.prop('disabled')).toBe(true);
  });

  it('should have the correct className when className prop is provided', () => {
    const customClassName = 'custom-button';
    const wrapper = shallow(<PrimaryButton className={customClassName}>Click Me</PrimaryButton>);
    expect(wrapper.hasClass(customClassName)).toBe(true);
  });
});
