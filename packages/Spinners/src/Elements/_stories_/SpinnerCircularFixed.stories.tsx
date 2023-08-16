import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SpinnerCircularFixed, SpinnerCircularFixedProps } from '../SpinnerCircularFixed';

export default {
  title: 'Spinners/SpinnerCircularFixed',
  component: SpinnerCircularFixed,
} as Meta;

const Template: Story<SpinnerCircularFixedProps> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <SpinnerCircularFixed {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  secondaryColor: '#3189fc',
  speed: 100,
  still: false,
  thickness: 4,
  width: 66,
  height: 66,
};
