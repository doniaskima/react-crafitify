import React from 'react';
import { Meta, Story } from '@storybook/react';
import Cube from '../Cube/Cube';

export default {
  title: 'Spinners/Cube',  
  component: Cube,
} as Meta;


const Template: Story<{ style: React.CSSProperties }> = (args) => <Cube {...args} />;


export const Default = Template.bind({});
Default.args = {
  style: { width: '200px', height: '200px' },
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  style: { width: '300px', height: '300px', backgroundColor: 'lightgray' },
};
