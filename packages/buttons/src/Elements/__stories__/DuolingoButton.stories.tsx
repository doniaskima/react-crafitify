import React from 'react';
import { Story, Meta } from '@storybook/react';
import DuolingoButton, { DuolingoButtonProps } from '../DuolingoButton';

export default {
  title: 'Buttons/DuolingoButton',
  component: DuolingoButton,
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

const Template: Story<DuolingoButtonProps> = (args) => (
  <CenteredStory>
    <DuolingoButton {...args} />
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Duolingo Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Duolingo Button',
  disabled: true,
};

export const Customized = Template.bind({});
Customized.args = {
  children: 'Custom Duolingo Button',
  backgroundColor: '#FF5733',
  hoverBackgroundColor: '#FF734D',
  textColor: '#FFF',
  fontSize: 18,
  height: 50,
  width: 100, 
};
