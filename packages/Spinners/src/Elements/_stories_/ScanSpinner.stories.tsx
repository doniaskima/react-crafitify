import React from 'react';
import { Story, Meta } from '@storybook/react';
import ScanSpinner from '../ScanSpinner/ScanSpinner';

export default {
  title: 'Spinners/ScanSpinner',
  component: ScanSpinner,
} as Meta;

const Template: Story<{ style: React.CSSProperties }> = (args) => <ScanSpinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  style: { width: '200px', height: '200px' },
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  style: { width: '300px', height: '300px', backgroundColor: 'lightgray' },
};
