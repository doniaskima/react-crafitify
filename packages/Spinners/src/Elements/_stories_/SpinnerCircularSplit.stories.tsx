import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SpinnerCircularSplit, SpinnerCircularSplitProps } from '../SpinnerCircularSplit';

export default {
  title: 'Spinners/SpinnerCircularSplit',
  component: SpinnerCircularSplit,
} as Meta;

const Template: Story<SpinnerCircularSplitProps> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <SpinnerCircularSplit {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  secondaryColor: '#1BFD9C',
  speed: 100,
  still: false,
  thickness: 4,
  width: 66,
  height: 66,
};
