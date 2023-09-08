import React from 'react';
import { Story, Meta } from '@storybook/react';
import Jellyfish from '../Jellyfish';

export default {
  title: 'Spinners/Jellyfish',
  component: Jellyfish,
  argTypes: {
    size: {
      control: { type: 'range', min: 100, max: 300, step: 10 }, 
    },
  },
} as Meta;

const Template: Story<{ size: number }> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Jellyfish {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: 200,  
};