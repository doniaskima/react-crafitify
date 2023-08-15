import React from 'react';
import { Story, Meta } from '@storybook/react';
import RushTriangButton, { RushTriangButtonProps } from '../RushTriangButton';

export default {
  title: 'Buttons/RushTriangButton',
  component: RushTriangButton,
} as Meta;

const Template: Story<RushTriangButtonProps> = (args) => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <RushTriangButton {...args} />
  </div>
)

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  disabled: true,
};

export const CustomText = Template.bind({});
CustomText.args = {
  children: 'Custom Text',
};


