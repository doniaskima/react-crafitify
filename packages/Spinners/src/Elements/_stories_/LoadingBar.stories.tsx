import React from 'react';
import { Meta, Story } from '@storybook/react';
import LoadingBar from '../LoadingBar';

export default {
  title: 'Spinners/LoadingBar',
  component: LoadingBar,
  argTypes: {
    text: { control: 'text' },
    textColor: { control: 'color' },
    barColor: { control: 'color' },
    className: { control: 'text' },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story = (args) => <LoadingBar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const CustomText = Template.bind({});
CustomText.args = {
  text: 'Please wait...',
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  textColor: '#ff0000',
  barColor: '#00ff00',
};

export const WithClassName = Template.bind({});
WithClassName.args = {
  className: 'custom-style',
};
