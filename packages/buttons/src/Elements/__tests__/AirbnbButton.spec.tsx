import React from 'react';
import { Meta, Story } from '@storybook/react';
import AirbnbButton, { AirbnbButtonProps } from '../AirbnbButton';

export default {
  title: 'Buttons/AirbnbButton',
  component: AirbnbButton,
} as Meta;

const Template: Story<AirbnbButtonProps> = (args) => <AirbnbButton {...args}>Airbnb Button</AirbnbButton>;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  backgroundColor: '#FFFFFF',
  borderColor: '#222222',
  hoverBackgroundColor: '#F7F7F7',
  hoverBorderColor: '#000000',
  textColor: '#222222',
  fontSize: 16,
  width: undefined,
  height: undefined,
  borderRadius: 8,
  borderWidth: 1,
};
