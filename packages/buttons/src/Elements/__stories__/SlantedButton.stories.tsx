import React from 'react';
import { Meta, Story } from '@storybook/react';
import SlantedButton from '../SlantedButton';

export default {
  title: 'Buttons/SlantedButton',
  component: SlantedButton,
} as Meta;

const Template: Story = (args) => <SlantedButton {...args}>Button</SlantedButton>;

export const Default = Template.bind({});
Default.args = {};
