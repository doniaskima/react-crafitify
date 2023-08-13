import React from 'react';
import { Meta, Story } from '@storybook/react';
import CubeLoader, { CubeLoaderProps } from '../CubeLoader';

export default {
  title: 'Spinners/CubeLoader',
  component: CubeLoader,
  argTypes: {
    color: { control: 'color' },
    borderColor: { control: 'color' }, // Added borderColor control
    className: { control: 'text' },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story<CubeLoaderProps> = (args) => <CubeLoader {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const CustomColor = Template.bind({});
CustomColor.args = {
  color: '#ff0000',
};

export const CustomBorderColor = Template.bind({});  
CustomBorderColor.args = {
  borderColor: '#00ff00',
};

export const CustomClassName = Template.bind({});
CustomClassName.args = {
  className: 'custom-style',
};
