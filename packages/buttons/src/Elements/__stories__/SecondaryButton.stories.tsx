import React from 'react';
import { Story, Meta } from '@storybook/react';
import SecondaryButton from '../SecondaryButton'; // Use the default import

export default {
  title: 'Buttons/SecondaryButton',
  component: SecondaryButton,
} as Meta;

const Template: Story = args => <SecondaryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: () => console.log('Button clicked'),
  disabled: false,
  children: 'Secondary Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  onClick: () => console.log('Button clicked'),
  disabled: true,
  children: 'Disabled Secondary Button',
};
