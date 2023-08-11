import React from 'react';
import { Meta, Story } from '@storybook/react';
import AirbnbButton, { AirbnbButtonProps } from '../AirbnbButton';

export default {
  title: 'Buttons/AirbnbButton',
  component: AirbnbButton,
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    hoverBackgroundColor: { control: 'color' },
    hoverBorderColor: { control: 'color' },
    textColor: { control: 'color' },
    fontSize: { control: 'number' },
    width: { control: 'number' },
    height: { control: 'number' },
    borderRadius: { control: 'number' },
    borderWidth: { control: 'number' },
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

const Template: Story<AirbnbButtonProps> = (args) => (
  <CenteredStory>
    <AirbnbButton {...args}>{args.children}</AirbnbButton>
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Airbnb Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Airbnb Button',
  disabled: true,
};

export const Customized = Template.bind({});
Customized.args = {
  children: 'Customized',
  backgroundColor: '#542dc9',
  borderColor: '#222222',
  hoverBackgroundColor: '#6d5cc5',
  hoverBorderColor: '#333333',
  textColor: '#000000',
  fontSize: 15,
  width: 150,
  height: 50,
  borderRadius: 10,
  borderWidth: 2,
};
