import React from 'react';
import { Meta, Story } from '@storybook/react';
import RefreshButton from '../RefreshButton';

export default {
  title: 'Buttons/RefreshButton',
  component: RefreshButton,
} as Meta;

const Template: Story = (args) => <RefreshButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Refresh',
};

export const Small = Template.bind({});
Small.args = {
  children: 'Small Refresh',
  style: { fontSize: '14px' },
};

export const Large = Template.bind({});
Large.args = {
  children: 'Large Refresh',
  style: { fontSize: '20px' },
};

export const Rounded = Template.bind({});
Rounded.args = {
  children: 'Rounded Refresh',
  style: { borderRadius: '1rem' },
};
