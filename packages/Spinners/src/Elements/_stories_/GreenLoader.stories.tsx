import React from 'react';
import { Story, Meta } from '@storybook/react';
import GreenLoader from '../GreenLoader/GreenLoader';

export default {
  title: 'Spinners/GreenLoader',
  component: GreenLoader,
} as Meta;

const Template: Story<{ style: React.CSSProperties }> = (args) => <GreenLoader {...args} />;

export const Default = Template.bind({});
Default.args = {
  style: { width: '200px', height: '200px' },
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  style: { width: '300px', height: '300px', backgroundColor: 'lightgray' },
};
