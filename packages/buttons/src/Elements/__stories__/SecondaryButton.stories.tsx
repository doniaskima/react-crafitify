import React from 'react';
import { Story, Meta } from '@storybook/react';
import SecondaryButton from '../SecondaryButton'; // Use the default import

export default {
  title: 'Buttons/SecondaryButton',
  component: SecondaryButton,
} as Meta;

const CenteredTemplate: Story = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <SecondaryButton {...args} />
  </div>
);

export const Default = CenteredTemplate.bind({});
Default.args = {
  onClick: () => console.log('Button clicked'),
  disabled: false,
  children: 'Secondary Button',
};

export const Disabled = CenteredTemplate.bind({});
Disabled.args = {
  onClick: () => console.log('Button clicked'),
  disabled: true,
  children: 'Disabled Secondary Button',
};
