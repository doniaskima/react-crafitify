import React from 'react';
import { Meta, Story } from '@storybook/react';
import GenerateBtn from '../GenerateBtn';

export default {
  title: 'Buttons/GenerateBtn',
  component: GenerateBtn,
} as Meta;

const Template: Story = (args) => <GenerateBtn {...args} />;

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
  loading: true,
};

export const CustomOnClick = Template.bind({});
CustomOnClick.args = {
  children: 'Custom OnClick',
  onClick: () => alert('Button Clicked!'),
};

export const Small = Template.bind({});
Small.args = {
  children: 'Small Button',
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  children: 'Medium Button',
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  children: 'Large Button',
  size: 'large',
};

export const Rounded = Template.bind({});
Rounded.args = {
  children: 'Rounded Button',
  borderRadius: '50px',
};
