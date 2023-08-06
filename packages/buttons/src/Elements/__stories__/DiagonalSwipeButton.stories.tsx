import React from 'react';
import { Meta, Story } from '@storybook/react';
import DiagonalSwipeButton, { DiagonalSwipeButtonProps } from '../DiagonalSwipeButton';

export default {
  title: 'Buttons/DiagonalSwipeButton',
  component: DiagonalSwipeButton,
} as Meta;

const CenteredTemplate: Story<DiagonalSwipeButtonProps> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <DiagonalSwipeButton {...args} />
  </div>
);

export const Default = CenteredTemplate.bind({});
Default.args = {
  children: 'Diagonal Swipe',
};

export const CustomColors = CenteredTemplate.bind({});
CustomColors.args = {
  children: 'Custom Colors',
  textColor: 'green',
  borderColor: 'green',
  hoverColor: 'lightgreen',
};

export const CustomBorderRadius = CenteredTemplate.bind({});
CustomBorderRadius.args = {
  children: 'Custom Border Radius',
  borderRadius: '50px',
};

export const CustomHoverDesign = CenteredTemplate.bind({});
CustomHoverDesign.args = {
  children: 'Custom Hover Design',
  textColor: 'blue',
  borderColor: 'blue',
  hoverColor: 'lightblue',
};
