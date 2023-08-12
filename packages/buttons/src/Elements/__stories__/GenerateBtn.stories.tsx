import React from 'react';
import { Meta, Story } from '@storybook/react';
import GenerateBtn, { GenerateBtnProps } from '../GenerateBtn';

export default {
  title: 'Buttons/GenerateBtn',
  component: GenerateBtn,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    children: {
      description: 'Content to display inside the button',
      control: { type: 'text' },
    },
    disabled: {
      description: 'Disables the button',
      control: { type: 'boolean' },
    },
    loading: {
      description: 'Shows a loading spinner in the button',
      control: { type: 'boolean' },
    },
    onClick: {
      description: 'Custom onClick event handler',
      action: 'Button Clicked!',
    },
    width: {
      description: 'Width of the button',
      control: { type: 'text' },
    },
    height: {
      description: 'Height of the button',
      control: { type: 'text' },
    },
    backgroundColor: { // Add backgroundColor control
      description: 'Background color of the button',
      control: { type: 'color' },
    },
    hoverGradient: { // Add hoverGradient control
      description: 'Hover gradient color of the button',
      control: { type: 'color' },
    },
  },
} as Meta;

const Template: Story<GenerateBtnProps> = (args) => (
  <div
    style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '150px',
    }}
  >
    <GenerateBtn {...args}>{args.children}</GenerateBtn>
    <br />
    <GenerateBtn {...args} disabled />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Click Me',
  width: '15em',
  height: '5em',
  backgroundColor: '#1C1A1C',
  hoverGradient: 'linear-gradient(0deg, #A47CF3, #683FEA)',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  disabled: true,
  width: '15em',
  height: '5em',
  backgroundColor: '#1C1A1C',
  hoverGradient: 'linear-gradient(0deg, #A47CF3, #683FEA)',
};

export const Loading = Template.bind({});
Loading.args = {
  children: 'Loading...',
  loading: true,
  width: '15em',
  height: '5em',
  backgroundColor: '#1C1A1C',
  hoverGradient: 'linear-gradient(0deg, #A47CF3, #683FEA)',
};

export const Sparkling = Template.bind({});
Sparkling.args = {
  children: 'Sparkling Button',
  onClick: () => alert('Button Clicked!'),
  width: '15em',
  height: '5em',
  backgroundColor: '#1C1A1C',
  hoverGradient: 'linear-gradient(0deg, #A47CF3, #683FEA)',
};
