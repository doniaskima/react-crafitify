import React from 'react';
import { Meta, Story } from '@storybook/react';
import ElevatedButton from '../ElevatedButton';

export default {
  title: 'Buttons/ElevatedButton',
  component: ElevatedButton,
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
    <ElevatedButton {...args} />
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  backgroundColor: '#3bbfa9', 
  textColor: '#FFF',
};
