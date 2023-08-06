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
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  children: 'Loading...',
  loading: true,
};

export const Sparkling = Template.bind({});
Sparkling.args = {
  children: 'Sparkling Button',
  onClick: () => alert('Button Clicked!'),
};
