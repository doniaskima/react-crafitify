import React from 'react';
import { Story, Meta } from '@storybook/react';
import IconButton from '../IconButton'; // Use default import for IconButton

export default {
  title: 'Buttons/IconButton',
  component: IconButton,
} as Meta;

const Template: Story = args => <IconButton {...args} />; // No need for type argument

export const Default = Template.bind({});
Default.args = {
  onClick: () => console.log('Button clicked'),
  disabled: false,
  children: '🚀', // Replace with any content you want (emoji, text, etc.)
};

export const Disabled = Template.bind({});
Disabled.args = {
  onClick: () => console.log('Button clicked'),
  disabled: true,
  children: '🚀', // Replace with any content you want (emoji, text, etc.)
};
