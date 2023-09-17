import React from 'react';
import { Story, Meta } from '@storybook/react';
import Devices from '../Devices';

export default {
  title: 'Spinners/Devices',
  component: Devices,
} as Meta;

const Template: Story = (args) => <Devices {...args} />;

export const Small = Template.bind({});
Small.args = {
  width: '80px',
  height: '50px',
};

export const Medium = Template.bind({});
Medium.args = {
  width: '160px',
  height: '100px',
};

export const Large = Template.bind({});
Large.args = {
  width: '240px',
  height: '150px',
};
