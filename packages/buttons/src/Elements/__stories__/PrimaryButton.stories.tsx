import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PrimaryButton, PrimaryButtonProps } from '../PrimaryButton';

export default {
  title: 'Buttons/PrimaryButton',
  component: PrimaryButton,
} as Meta;

const CenteredTemplate: Story<PrimaryButtonProps> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <PrimaryButton {...args} />
  </div>
);

export const Default = CenteredTemplate.bind({});
Default.args = {
  children: 'Click Me',
};

export const Disabled = CenteredTemplate.bind({});
Disabled.args = {
  children: 'Disabled Button',
  disabled: true,
};

export const CustomStyle = CenteredTemplate.bind({});
CustomStyle.args = {
  children: 'Custom Style',
  className: 'custom-button',
};

export const CustomOnClick = CenteredTemplate.bind({});
CustomOnClick.args = {
  children: 'Custom OnClick',
  onClick: () => alert('Button Clicked!'),
};
