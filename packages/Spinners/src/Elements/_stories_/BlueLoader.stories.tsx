import React from 'react';
import { Meta, Story } from '@storybook/react';
import BluLoader from '../BlueLoader';

export default {
  title: 'Spinners/BlueLoader',
  component: BluLoader,
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
      <BluLoader {...args} />
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  color: '#004dff',
  size: '56px'
};

export const CustomColorAndSize = Template.bind({});
CustomColorAndSize.args = {
  color: '#ff0000',
  size: '100px'
};
