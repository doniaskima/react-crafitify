import React from 'react';
import { Meta, Story } from '@storybook/react';
import ScanButton from '../ScanButton';

export default {
  title: 'Buttons/ScanButton',
  component: ScanButton,
  argTypes: {
    onClick: { action: 'clicked' }, // Define action to log when the button is clicked
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: Story = (args) => <ScanButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Scan',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Scan',
  disabled: true,
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  children: 'Custom Style Scan',
  style: { backgroundColor: '#ff9900', color: '#fff' },
};

export const CustomOnClick = Template.bind({});
CustomOnClick.args = {
  children: 'Custom OnClick Scan',
  onClick: () => alert('Button Clicked!'),
};

export const Large = Template.bind({});
Large.args = {
  children: 'Large Scan',
  style: { fontSize: '1.3em', width: '160px', height: '50px' },
};

export const Rounded = Template.bind({});
Rounded.args = {
  children: 'Rounded Scan',
  style: { borderRadius: '10px' },
};
