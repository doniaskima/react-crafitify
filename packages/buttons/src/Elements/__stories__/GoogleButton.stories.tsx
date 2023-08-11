import React from 'react';
import { Story, Meta } from '@storybook/react';
import GoogleButton, { GoogleButtonProps } from '../GoogleButton';

export default {
  title: 'Buttons/GoogleButton',
  component: GoogleButton,
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

const Template: Story<GoogleButtonProps> = (args) => (
  <CenteredStory>
    <GoogleButton {...args} />
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Google Button',
};

export const Customized = Template.bind({});
Customized.args = {
  children: 'Custom Google Button',
  backgroundColor: '#4285f4',
  borderColor: '#4285f4',
  hoverBorderColor: '#357ae8',
  textColor: '#ffffff',
  size: 'custom',
  customSize: '20px',
  borderWidth: 2,
};
