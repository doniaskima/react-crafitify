import React from 'react';
import { Story, Meta } from '@storybook/react';
import Lovebtn, { LovebtnProps } from '../Lovebtn';

export default {
  title: 'Buttons/LoveButton',
  component: Lovebtn,
} as Meta;

const CenteredTemplate: Story<LovebtnProps> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Lovebtn {...args}>Hover Me!</Lovebtn>
  </div>
);

export const Default = CenteredTemplate.bind({});
