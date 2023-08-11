import React from 'react';
import { Meta, Story } from '@storybook/react';
import BoscockButton from '../BoscockButton';

export default {
  title: 'Buttons/Boscock',
  component: BoscockButton,
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
    <BoscockButton {...args} />
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Click Me :3',
};

export const Customized = Template.bind({});
Customized.args = {
  children: 'Custom Button',
  backgroundColor: 'blue',
  fontSize: '18px',
  width: '150px',
  height: '40px',
};
