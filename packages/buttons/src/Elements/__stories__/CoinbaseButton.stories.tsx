import React from 'react';
import { Story, Meta } from '@storybook/react';
import CoinbaseButton, { CoinbaseButtonProps } from '../CoinbaseButton';

export default {
  title: 'Buttons/CoinbaseButton',
  component: CoinbaseButton,
  argTypes: {
    children: { control: 'text' },
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    textColor: { control: 'color' },
    fontSize: { control: 'number' },
    width: { control: 'text' },
    height: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const CenteredStory: React.FC = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {children}
    </div>
  );
};

const Template: Story<CoinbaseButtonProps> = (args) => (
  <CenteredStory>
    <CoinbaseButton {...args}>{args.children}</CoinbaseButton>
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Coinbase Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Coinbase Button',
  disabled: true,
};

export const Customized = Template.bind({});
Customized.args = {
  children: 'Customized Coinbase Button',
  backgroundColor: '#FF5733',
  borderColor: '#FF5733',
  textColor: '#FFFFFF',
  fontSize: 18,
  width: '200px',
  height: '50px',
};
