import React from 'react';
import { Meta, Story } from '@storybook/react';
import RefreshButton from '../RefreshButton';

export default {
  title: 'Buttons/RefreshButton',
  component: RefreshButton,
} as Meta;

const CenteredTemplate: Story = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <RefreshButton {...args} />
  </div>
);

export const Default = CenteredTemplate.bind({});
Default.args = {
  children: 'Refresh',
};

export const Small = CenteredTemplate.bind({});
Small.args = {
  children: 'Small Refresh',
  fontSize: '14px',
};

export const Large = CenteredTemplate.bind({});
Large.args = {
  children: 'Large Refresh',
  fontSize: '20px',
};

export const Rounded = CenteredTemplate.bind({});
Rounded.args = {
  children: 'Rounded Refresh',
  style: { borderRadius: '1rem' },
};
