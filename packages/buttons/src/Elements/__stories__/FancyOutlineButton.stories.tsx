import React from 'react';
import { Meta, Story } from '@storybook/react';

import FancyOutlineButton, { FancyOutlineButtonProps } from '../FancyOutlineButton';

export default {
  title: 'Buttons/FancyOutlineButton',
  component: FancyOutlineButton,
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

const Template: Story<FancyOutlineButtonProps> = (args) => (
  <CenteredStory>
    <FancyOutlineButton {...args} />
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  children: 'BUTTON',
  color: '#DAA06D',
  hoverColor: '#FFA500',  
  activeColor: '#FF4500',  
  size: 'medium',  
};
