import React from 'react';
import { Meta, Story } from '@storybook/react';
import StyledButton from '../StyledButton';

export default {
  title: 'Buttons/StyledButton',
  component: StyledButton,
} as Meta;

const CenteredTemplate: Story = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <StyledButton {...args}>Sign up</StyledButton>
  </div>
);

export const Default = CenteredTemplate.bind({});
Default.args = {};

export const CustomColors = CenteredTemplate.bind({});
CustomColors.args = {
  style: {
    '--primary-color': '#FF5733',
    '--secondary-color': '#00FF00',
    '--hover-color': '#FFFF00',
  },
};
