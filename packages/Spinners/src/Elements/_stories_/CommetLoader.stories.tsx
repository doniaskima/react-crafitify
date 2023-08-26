import React from 'react';
import { Story, Meta } from '@storybook/react';
import CommetLoader from '../CommetLoader';

export default {
  title: 'Spinners/CommetLoader',
  component: CommetLoader,
  argTypes: {
    color1: {
      control: 'color',
      defaultValue: 'gold',
    },
    color2: {
      control: 'color',
      defaultValue: 'lime',
    },
    size1: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      defaultValue: 'medium',
    },
    size2: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      defaultValue: 'small',
    },
  },
} as Meta;

const Template: Story = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <CommetLoader {...args} />
  </div>
);

export const Default = Template.bind({});
