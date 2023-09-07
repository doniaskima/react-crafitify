import React from 'react';
import { Story, Meta } from '@storybook/react';
import TopLoader from '../TopLoader/TopLoader';
 
export default {
  title: 'Components/TopLoader',
  component: TopLoader,
} as Meta;

const Template: Story = (args) => <TopLoader {...args} />;

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  context: {
    primaryColor: 'blue',
  },
  style: {

  },
};

export const NotLoading = Template.bind({});
NotLoading.args = {
  loading: false,
  context: {
    primaryColor: 'red',
  },
  style: {},
};
