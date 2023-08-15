import React from 'react';
import { Story, Meta } from '@storybook/react';
import CustomLoader, { CustomLoaderProps } from '../CustomLoader';

export default {
  title: 'Spinners/CustomLoader',
  component: CustomLoader,
} as Meta;

const Template: Story<CustomLoaderProps> = (args) => <CustomLoader {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Loading...',
};

export const CustomText = Template.bind({});
CustomText.args = {
  text: 'Custom Text',
  textColor: '#FF0000',
};

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
  text: 'Custom Background Color',
  backgroundColor: '#00FF00',
};

export const CustomClassName = Template.bind({});
CustomClassName.args = {
  text: 'Custom Class Name',
  className: 'custom-loader',
};

