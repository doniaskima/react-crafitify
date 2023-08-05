import React from 'react';
import { Meta, Story } from '@storybook/react';
import TertiaryButton from '../TertiaryButton';

export default {
  title: 'Buttons/TertiaryButton',
  component: TertiaryButton,
} as Meta;

const Template: Story = (args) => <TertiaryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  children: 'Large Button',
  style: { fontSize: '20px', padding: '12px 24px' },
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  children: 'Custom Color Button',
  bgColor: '#ff9900', // Change the background color on hover
  textColor: '#ffffff80', // Change the text color on default
  borderColor: '#ff9900', // Change the border color on default
  shadowColor: '#ff9900', // Change the shadow color on hover
};
