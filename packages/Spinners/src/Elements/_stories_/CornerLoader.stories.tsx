import React from 'react';
import { Meta, Story } from '@storybook/react';
import CornerLoader, { CornerLoaderProps } from '../CornerLoader';

export default {
  title: 'Spinners/CornerLoader',
  component: CornerLoader,
  parameters: {
    layout: 'centered', 
  },
} as Meta;

const Template: Story<CornerLoaderProps> = (args) => <CornerLoader {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const CustomColor = Template.bind({});
CustomColor.args = {
  color: '#ff0000', 
};

export const WithClassName = Template.bind({});
WithClassName.args = {
  className: 'custom-class', 
};
