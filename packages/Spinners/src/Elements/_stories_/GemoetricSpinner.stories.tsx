import React from 'react';
import { Story, Meta } from '@storybook/react';
import GemoetricSpinner from '../GemoetricSpinner/GemoetricSpinner';

export default {
  title: 'Spinners/GemoetricSpinner',
  component: GemoetricSpinner,
} as Meta;

const Template: Story<{ style: React.CSSProperties }> = (args) => <GemoetricSpinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  style: { width: '200px', height: '200px' },
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  style: { width: '300px', height: '300px', backgroundColor: 'lightgray' },
};
