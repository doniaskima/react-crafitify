import React from 'react';
import { Meta, Story } from '@storybook/react';
import DotSpinner, { DotSpinnerProps } from '../DotSpinner';  

export default {
  title: 'Spinners/DotSpinner',
  component: DotSpinner,
  parameters: {
    layout: 'centered', 
  },
} as Meta;

const Template: Story<DotSpinnerProps> = (args) => <DotSpinner {...args} />;

export const Default = Template.bind({});
Default.args = {};

 