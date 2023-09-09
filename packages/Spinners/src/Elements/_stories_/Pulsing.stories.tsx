import React from 'react';
import { Story, Meta } from '@storybook/react';
import Pulsing from '../Pulsing';

export default {
  title: 'Spinners/Pulsing',
  component: Pulsing,
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
    <Pulsing color={args.color} size={args.size} />
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  color: '#000',
  size: '20px',
};
