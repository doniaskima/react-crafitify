import React from 'react';
import { Meta, Story } from '@storybook/react';
import CustomSpinner from '../CustomSpinner';

export default {
  title: 'Spinners/CustomSpinner',
  component: CustomSpinner,
  argTypes: {
    color: { control: 'color' },
    center: { control: 'boolean' },
    className: { control: 'text' },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story = (args) => <CustomSpinner {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Colored = Template.bind({});
Colored.args = {
  color: '#ff0000',
};

export const Centered = Template.bind({});
Centered.args = {
  center: true,
};

export const CustomClass = Template.bind({});  
CustomClass.args = {
  className: 'custom-spinner',  
};
