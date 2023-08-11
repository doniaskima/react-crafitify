import React from 'react';
import { Meta, Story } from '@storybook/react';
import GradientButton from '../GradientButton';

export default {
  title: 'Buttons/GradientButton',
  component: GradientButton,
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

const Template: Story = (args) => (
  <CenteredStory>
    <GradientButton {...args}>Gradient Button</GradientButton>
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {};

export const Customized = Template.bind({});
Customized.args = {
  textColor: '#000',
  bgColor: '#FF5733',
  hoverBgColor: '#E82C0C',
  fontSize: '20px',
  width: '200px',
  height: '50px',
};
