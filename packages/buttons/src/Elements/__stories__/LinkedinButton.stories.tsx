import React from 'react';
import { Story, Meta } from '@storybook/react';
import LinkedinButton, { LinkedinButtonProps } from '../LinkedinButton';

export default {
  title: 'Buttons/LinkedinButton',
  component: LinkedinButton,
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

const Template: Story<LinkedinButtonProps> = (args) => (
  <CenteredStory>
    <LinkedinButton {...args} />
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Linkedin Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Linkedin Button',
  disabled: true,
};

export const Customized = Template.bind({});
Customized.args = {
  children: 'Custom Linkedin Button',
  backgroundColor: '#FF5733',
  hoverBackgroundColor: '#FF734D',
  activeBackgroundColor: '#FF5733',
  textColor: '#FFF',
  fontSize: 18,
  height: 50,
  minWidth: 150,
};
