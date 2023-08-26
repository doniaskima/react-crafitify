import React from 'react';
import { Story, Meta } from '@storybook/react';
import GlowingSpinner from '../GlowingSpinner';

export default {
  title: 'Spinners/GlowingSpinner',
  component: GlowingSpinner,
} as Meta;

const Template: Story = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <GlowingSpinner {...args} />
  </div>
);

export const Default = Template.bind({});
