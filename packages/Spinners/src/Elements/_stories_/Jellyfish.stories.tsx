import React from 'react';
import { Story, Meta } from '@storybook/react';
import Jellyfish from '../Jellyfish';

export default {
  title: 'Spinners/Jellyfish',
  component: Jellyfish,
} as Meta;

const Template: Story = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Jellyfish {...args} />
  </div>
);

export const Default = Template.bind({});
