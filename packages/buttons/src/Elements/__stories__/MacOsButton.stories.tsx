import React from 'react';
import { Story, Meta } from '@storybook/react';
import MacOsButton, { MacOsButtonProps } from '../MacOsButton';

export default {
    title: 'Buttons/MacOsButton',
    component: MacOsButton,
    argTypes: {
      children: { control: 'text' },
      backgroundColor: { control: 'color' },
      textColor: { control: 'color' },
      borderColor: { control: 'color' },
      borderWidth: { control: 'number' },
      boxShadow: { control: 'text' },
      width: { control: 'text' },
      height: { control: 'text' },
      size: {
        control: {
          type: 'radio',
          options: ['small', 'medium', 'large'],
        },
      },
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

const Template: Story<MacOsButtonProps> = (args) => (
  <CenteredStory>
    <MacOsButton {...args}>{args.children}</MacOsButton>
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  children: 'MacOs Button',
  width: 100, 
  height: 40, 
};

export const WithFocus = Template.bind({});
WithFocus.args = {
  children: 'Focus Me',
  borderColor: '#3A6CD9',
  borderWidth: 2,
  boxShadow: '0px 0.5px 1px rgba(0, 0, 0, 0.2)',
  backgroundColor: '#EFEFEF',
  textColor: '#555555',
};
