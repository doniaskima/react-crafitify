import React from 'react';
import { Story, Meta } from '@storybook/react';
import CuteFace from '../CuteFace/CuteFace';

export default {
  title: 'Spinners/CuteFace',
  component: CuteFace,
} as Meta;

const Template: Story<{ style: React.CSSProperties }> = (args) => <CuteFace {...args} />;

export const Default = Template.bind({});
Default.args = {
  style: { width: '200px', height: '200px' },
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  style: { width: '300px', height: '300px', backgroundColor: 'lightgray' },
};

