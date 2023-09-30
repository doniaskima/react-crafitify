import React from 'react';
import { Story, Meta } from '@storybook/react';
import RadialProgressWrapper from '../Progress/RadialProgress';
 

export default {
  title: 'Components/RadialProgress',
  component: RadialProgressWrapper,
  argTypes: {
    prcnt: { control: 'number' },
    square: { control: 'boolean' },
    strokeColor: { control: 'color' },
    size: { control: 'text' },
  },
} as Meta;

const Template: Story = (args) => <RadialProgressWrapper {...args} />;

export const Default = Template.bind({});
Default.args = {
  prcnt: 50,
  size: '100px',
};

export const Square = Template.bind({});
Square.args = {
  prcnt: 70,
  square: true,
  size: '100px',
};
