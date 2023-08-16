import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SpinnerCircular, SpinnerCircularProps } from '../SpinnerCircular';

export default {
  title: 'Spinners/SpinnerCircular',
  component: SpinnerCircular,
} as Meta;

const Template: Story<SpinnerCircularProps> = args => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
    <SpinnerCircular {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  secondaryColor: '#1BFD9C',
  speed: 100,
  still: false,
  thickness: 50,
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  secondaryColor: '#FF5733',
  speed: 20,
  still: true,
  thickness: 30,
};
