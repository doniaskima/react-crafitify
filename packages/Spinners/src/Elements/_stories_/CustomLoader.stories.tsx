import React from 'react';
import { Meta, Story, Canvas } from '@storybook/react';
import CustomLoader from '../CustomLoader';

export default {
  title: 'Spinners/CustomLoader',
  component: CustomLoader,
  argTypes: {
    text: { control: 'text' },
    textColor: { control: 'color' },
    className: { control: 'text' },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story = (args) => <CustomLoader {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const CustomText = Template.bind({});
CustomText.args = {
  text: 'Please wait...',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  textColor: '#ff0000',
};

export const WithClassName = Template.bind({});
WithClassName.args = {
  className: 'custom-style',
};
