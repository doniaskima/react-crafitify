import React from 'react';
import { Story, Meta } from '@storybook/react';
import LoadingText from '../LoadingText';

export default {
  title: 'Spinners/LoadingText',
  component: LoadingText,
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

const Template: Story = () => (
  
    <LoadingText />
 
);

export const Default = Template.bind({});
