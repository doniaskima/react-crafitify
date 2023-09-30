import React from 'react';
import { Story, Meta } from '@storybook/react';
import DefaultProgressWrapper from '../Progress/DefaultProgress';
 

export default {
  title: 'Components/Progress',
  component: DefaultProgressWrapper,
  argTypes: {
    prcnt: { control: 'number' },
    square: { control: 'boolean' },
    strokeColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => <DefaultProgressWrapper {...args} />;

export const Default = Template.bind({});
Default.args = {
  prcnt: 50,
};

export const Square = Template.bind({});
Square.args = {
  prcnt: 70,
  square: true,
};
