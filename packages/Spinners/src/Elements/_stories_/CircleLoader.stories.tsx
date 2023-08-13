import React from 'react';
import { Meta, Story } from '@storybook/react';
import CircleLoader from '../CircleLoader';

export default {
  title: 'Spinners/CircleLoader',
  component: CircleLoader,
  parameters: {
    layout: 'centered', 
  },
} as Meta;

const Template: Story = (args) => <CircleLoader {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const CustomColor = Template.bind({});
CustomColor.args = {
  color: '#ff0000', 
};
