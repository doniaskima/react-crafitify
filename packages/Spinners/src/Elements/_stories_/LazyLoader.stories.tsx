import React from 'react';
import { Story, Meta } from '@storybook/react';
import LazyLoader from '../LazyLoader/LazyLoader';

export default {
  title: 'Spinners/LazyLoader',
  component: LazyLoader,
} as Meta;

const Template: Story<{ style: React.CSSProperties }> = (args) => <LazyLoader {...args} />;

export const Default = Template.bind({});
Default.args = {
  style: { width: '200px', height: '200px' },
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  style: { width: '300px', height: '300px', backgroundColor: 'lightgray' },
};
