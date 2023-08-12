import React from 'react';
import { Meta, Story } from '@storybook/react';
import PaperButton, { PaperButtonProps } from '../PaperButton';

export default {
  title: 'Buttons/PaperButton',
  component: PaperButton,
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

const Template: Story<PaperButtonProps> = (args) => (
  <CenteredStory>
    <PaperButton {...args} />
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const Customized = Template.bind({});
Customized.args = {
  children: 'Custom Button',
  backgroundColor: '#e8e8e8',
  textColor: '#333',
  size: 'medium',
};
