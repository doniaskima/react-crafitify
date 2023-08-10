import React from 'react';
import { Meta, Story } from '@storybook/react';
import ThreeDButton, { ThreeDButtonProps } from '../ThreeDButton';

export default {
  title: 'Buttons/ThreeDButton',
  component: ThreeDButton,
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

const Template: Story<ThreeDButtonProps> = (args) => (
  <CenteredStory>
    <ThreeDButton {...args} />
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Default Button',
};

export const Customized = Template.bind({});
Customized.args = {
  children: 'Custom Button',
  backgroundColor: '#43bccc',
  borderColor: '#43bccc',
  textColor: '#fff',
};
