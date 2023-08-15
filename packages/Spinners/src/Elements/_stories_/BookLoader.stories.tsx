import React from 'react';
import { Story, Meta } from '@storybook/react';
import BookLoader from '../BookLoader/BookLoader';

export default {
  title: 'Spinners/BookLoader',
  component: BookLoader,
} as Meta;

const Template: Story<{ style: React.CSSProperties }> = (args) => <BookLoader {...args} />;

export const Default = Template.bind({});
Default.args = {
  style: { width: '200px', height: '200px' },
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  style: { width: '300px', height: '300px', backgroundColor: 'lightgray' },
};
