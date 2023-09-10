import React from 'react';
import { Story, Meta } from '@storybook/react';
import Statistic from '../Statistic';

export default {
  title: 'Statistics/Statistic',
  component: Statistic,
} as Meta;

const Template: Story = (args) => <Statistic {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Total Sales',
  value: 10000,
  prevValue: 8000,
  currency: '$',
  valueClassName: 'green-text', 
};
