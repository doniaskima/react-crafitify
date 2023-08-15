import React from 'react';
import { Story, Meta } from '@storybook/react';
import CornerLoader, { CornerLoaderProps } from '../CornerLoader';

export default {
  title: 'Spinners/CornerLoader',
  component: CornerLoader,
} as Meta;

const Template: Story<CornerLoaderProps> = (args) => <CornerLoader {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const CustomColor = Template.bind({});
CustomColor.args = {
  color: 'blue',
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  size: '5rem',
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  className: 'my-custom-class',
};
