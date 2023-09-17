import React from 'react';
import { Meta, Story } from '@storybook/react';
import Codecite from '../Codecite';

export default {
  title: 'Spinners/Codecite',
  component: Codecite,
  argTypes: {
    colors: {
      control: 'text',
    },
    size: { control: 'text' },
  },
} as Meta;

const Template: Story = (args) => {
  let colors = [];

  if (args.colors) {
    if (typeof args.colors === 'string') {

      colors = args.colors.split(',').map(color => color.trim());
    } else {
      // Assume it's an array of colors
      colors = args.colors;
    }
  }

  return <Codecite {...args} colors={colors} />;
};

export const Default = Template.bind({});
Default.args = {
  colors: ['#A32EFF', '#A32EFF', '#A32EFF','#A32EFF','#A32EFF','#A32EFF','#A32EFF','#A32EFF'],  
  size: '150px',
};
