import React from 'react';
import { Story, Meta } from '@storybook/react';
import AppleButton, { AppleButtonProps } from '../AppleButton';

export default {
  title: 'Buttons/AppleButton',
  component: AppleButton,
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

const Template: Story<AppleButtonProps> = (args) => (
  <CenteredStory>
    <AppleButton {...args} />
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Apple Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Apple Button',
  disabled: true,
};

export const Customized = Template.bind({});
Customized.args = {
  children: 'Custom Apple Button',
  backgroundColor: '#FF5733',
  borderColor: '#FF5733',
  hoverBackgroundColor: '#FF734D',
  hoverBorderColor: '#FF734D',
  textColor: '#FFF',
  fontSize: 20,
  height: 48,
  borderWidth: 2,
  activeBackgroundColor: '#0067B9',  
  activeBorderColor: '#006DBC',  
};
