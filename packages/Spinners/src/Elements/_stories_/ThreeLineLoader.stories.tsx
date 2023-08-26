import React from 'react';
import { Story, Meta } from '@storybook/react';
import ThreeLineLoader, { ThreeLineLoaderProps } from '../ThreeLineLoader';

export default {
  title: 'Spinners/ThreeLineLoader',
  component: ThreeLineLoader,
  argTypes: {
    color: { control: 'color', defaultValue: '#EFEFFA' },
    size: { control: 'text', defaultValue: '64px' },
  },
} as Meta;

const Template: Story<ThreeLineLoaderProps> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <ThreeLineLoader {...args} />
  </div>
);

export const Default = Template.bind({});
