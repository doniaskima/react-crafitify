import React from 'react';
import { Meta, Story } from '@storybook/react';
import RotatingCirclesLoader from '../RotatingCirclesLoader';

export default {
  title: 'Spinners/RotatingCirclesLoader',
  component: RotatingCirclesLoader,
  argTypes: {
    color: { control: 'color' },
    className: { control: 'text' },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story = (args) => <RotatingCirclesLoader {...args} />;

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
