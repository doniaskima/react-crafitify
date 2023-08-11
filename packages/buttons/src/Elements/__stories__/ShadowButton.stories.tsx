import React from 'react';
import { Meta, Story } from '@storybook/react';
import ShadowButton from '../ShadowButton';

export default {
  title: 'Buttons/ShadowButton',
  component: ShadowButton,
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
    <ShadowButton {...args}>Shadow Button</ShadowButton>
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  textColor: '#000',
  border: '3px solid',
  hoverTextColor: '#fff',
  hoverBorder: '3px solid #38D2D2',
  hoverBackgroundColor: '#38D2D2',
};
