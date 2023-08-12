import React from 'react';
import { Story, Meta } from '@storybook/react';
import Lovebtn, { LovebtnProps } from '../Lovebtn';

export default {
  title: 'Buttons/LoveButton',
  component: Lovebtn,
} as Meta;

const Template: Story<LovebtnProps> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Lovebtn {...args}>Hover Me!</Lovebtn>
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export const SmallSize = Template.bind({});
SmallSize.args = {
  size: 'small',
};

export const MediumSize = Template.bind({});
MediumSize.args = {
  size: 'medium',
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  size: 'large',
};
