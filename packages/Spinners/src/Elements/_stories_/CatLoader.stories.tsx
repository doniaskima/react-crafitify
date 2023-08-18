import React from 'react';
import { Story, Meta } from '@storybook/react';
import CatLoader from '../CatLoader/CatLoader';

export default {
  title: 'Spinners/CatLoader',
  component: CatLoader,
} as Meta;

const Template: Story<{ style: React.CSSProperties }> = (args) => <CatLoader {...args} />;

export const Default = Template.bind({});
Default.args = {
  style: { width: '200px', height: '200px' },
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  style: { width: '300px', height: '300px', backgroundColor: 'lightgray' },
};
