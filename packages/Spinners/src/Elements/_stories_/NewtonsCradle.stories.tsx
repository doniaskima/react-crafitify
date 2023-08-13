import React from 'react';
import { Meta, Story } from '@storybook/react';
import NewtonsCradle from '../NewtonsCradle';

export default {
  title: 'Spinners/NewtonsCradle',
  component: NewtonsCradle,
  argTypes: {
    color: { control: 'color' },
    className: { control: 'text' },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story = (args) => <NewtonsCradle {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const CustomColor = Template.bind({});
CustomColor.args = {
  color: '#00ff00',
};

export const CustomClassName = Template.bind({});
CustomClassName.args = {
  className: 'custom-style',
};
