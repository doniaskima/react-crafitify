import React from 'react';
import { Meta, Story } from '@storybook/react';
import StyledButton from '../StyledButton';

export default {
  title: 'Buttons/StyledButton',
  component: StyledButton,
} as Meta;

const Template: Story = (args) => <StyledButton {...args}>Sign up</StyledButton>;

export const Default = Template.bind({});
Default.args = {};

export const CustomColors = Template.bind({});
CustomColors.args = {
  style: {
    '--primary-color': '#FF5733',
    '--secondary-color': '#00FF00',
    '--hover-color': '#FFFF00',
  },
};
