import React from 'react';
import { Meta, Story } from '@storybook/react';
import ShakeButton from '../ShakeButton';

export default {
  title: 'Buttons/ShakeButton',
  component: ShakeButton,
} as Meta;

const Template: Story = (args) => <ShakeButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Shake',
};

export const Small = Template.bind({});
Small.args = {
  children: 'Small Shake',
  style: { height: '2.5em', width: '6em', fontSize: '14px' },
};

export const Large = Template.bind({});
Large.args = {
  children: 'Large Shake',
  style: { height: '3.5em', width: '10em', fontSize: '20px' },
};

export const Rounded = Template.bind({});
Rounded.args = {
  children: 'Rounded Shake',
  style: { borderRadius: '20em' },
};
