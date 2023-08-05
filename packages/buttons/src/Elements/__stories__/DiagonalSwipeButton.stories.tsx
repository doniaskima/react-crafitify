import React from 'react';
import { Meta, Story } from '@storybook/react';
import DiagonalSwipeButton from '../DiagonalSwipeButton';

export default {
  title: 'Buttons/DiagonalSwipeButton',
  component: DiagonalSwipeButton,
} as Meta;

const Template: Story = (args) => <DiagonalSwipeButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Diagonal Swipe',
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  children: 'Custom Colors',
  textColor: 'green',
  borderColor: 'green',
  hoverColor: 'lightgreen',
};

export const CustomBorderRadius = Template.bind({});
CustomBorderRadius.args = {
  children: 'Custom Border Radius',
  borderRadius: '50px',
};

export const CustomHoverDesign = Template.bind({});
CustomHoverDesign.args = {
  children: 'Custom Hover Design',
  textColor: 'blue',
  borderColor: 'blue',
  hoverColor: 'lightblue',
};
