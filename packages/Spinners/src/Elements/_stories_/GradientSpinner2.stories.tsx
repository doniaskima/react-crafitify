import React from 'react';
import { Meta, Story } from '@storybook/react';
import GradientSpinner2, { GradientSpinner2Props } from '../GradientSpinner2';

export default {
  title: 'Spinners/GradientSpinner2',
  component: GradientSpinner2,
} as Meta;

const Template: Story<GradientSpinner2Props> = (args) => <GradientSpinner2 {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const CustomSize = Template.bind({});
CustomSize.args = {
  size: '50px',
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  startColor: '#FF5733',
  midColor: '#DAF7A6',
  endColor: '#C70039',
};
