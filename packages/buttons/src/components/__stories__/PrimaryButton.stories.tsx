// src/components/__stories__/PrimaryButton.stories.tsx

import React from 'react';
import { Meta, Story } from '@storybook/react'; // Import both Meta and Story from @storybook/react
import { PrimaryButton, PrimaryButtonProps } from '../PrimaryButton'; // Import PrimaryButton and PrimaryButtonProps

export default {
  title: 'Components/PrimaryButton',
  component: PrimaryButton,
} as Meta;

const Template: Story<PrimaryButtonProps> = (args) => <PrimaryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Click Me',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  disabled: true,
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  children: 'Custom Style',
  className: 'custom-button',
};

export const CustomOnClick = Template.bind({});
CustomOnClick.args = {
  children: 'Custom OnClick',
  onClick: () => alert('Button Clicked!'),
};
